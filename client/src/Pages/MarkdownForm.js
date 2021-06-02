import React, { useEffect, useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

import { createPost } from '../actions/posts'
import { editPost } from '../actions/dashboardPosts'
import { setCurrentId } from '../actions/currentId'
import '../styles/MarkdownForm.css'

const Form = () => {

  const [postData, setPostData] = useState({ title: '', markdown: '', tags: '', selectedFile: '' })
  const dispatch = useDispatch()

  const currentId = useSelector(state => state.currentId)
  const currentPost = useSelector(state => currentId ? state.dashboardPosts.find(post => post._id === currentId) : null)

  useEffect(() => {
    if (currentPost) setPostData(currentPost)
  }, [currentPost])

  const clear = () => {
    setCurrentId('')
    setPostData({ title: '', markdown: '', tags: '', selectedFile: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentId === '') {
      dispatch(createPost(postData))
      clear()
    } else {
      dispatch(editPost(currentId, postData))
      clear()
    }
  }

  const handleClear = () => {
    clear()
  }

  return (
    <form className="content-form" onSubmit={handleSubmit}>
      <h1 className="form-name">Create Post</h1>
      <input
        className="input"
        name="title"
        value={postData.title}
        onChange={e => setPostData({ ...postData, title: e.target.value })}
        placeholder="Title"
        type="text" />
      <textarea
        className="input"
        name="markdown"
        value={postData.markdown}
        onChange={e => setPostData({ ...postData, markdown: e.target.value })}
        placeholder="Markdown"
        type="text" />
      <input
        className="input"
        name="tags"
        value={postData.tags}
        onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })}
        placeholder="Tags"
        type="text" />
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
      />

      <div className="btn-div">
        <button className="btn" type="submit" >Submit</button>
        <button className="btn" onClick={handleClear} >Clear</button>
      </div>
    </form>
  )
}

export default Form
