import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom"

import { setIdForArticle } from '../actions/articleId'
import "../styles/Card.css"

const Card = ({ post }) => {

  const dispatch = useDispatch()

  return (
    <Link to={`/article/${post._id}`} className="card" onClick={() => dispatch(setIdForArticle(post._id))}>
      <div className="img-div">
        <img className="card-img" src={post.selectedFile} alt="img" />
      </div>
      <h3 className="card-title">
        {post.title}
      </h3>
    </Link>
  )
}

export default Card
