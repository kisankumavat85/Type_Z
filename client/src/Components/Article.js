import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { useSelector } from 'react-redux'
import moment from 'moment'

import '../styles/Article.css'

const Article = ({ match }) => {

  const id = useSelector(state => state.articleId)
  const post = useSelector(state => state.posts.filter(post => post._id === id))

  if (match && !id) {
    return <h1>Match avaliable</h1>
  } else {
    return (
      <div className='article-div'>
        <h1 className='title'>{post[0].title}</h1>
        <p className="author">By {post[0].creator} | {moment(post[0].createdAt).format("ll")} </p>
        <img className="content-img" src={post[0].selectedFile} alt="img" />
        <ReactMarkdown className="content" children={post[0].markdown} />
      </div>
    )
  }
}



export default Article
