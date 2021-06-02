import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import '../styles/DashboardCard.css'
import { setIsLoading } from '../actions/isLoading'
import { deletePost } from '../actions/dashboardPosts'
import { setCurrentId } from '../actions/currentId'

const DashbordCard = ({ post }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLoading(false))
  })

  const onDelete = () => {
    const condition = window.confirm("Do you want to delete the Post?")
    if (condition) {
      dispatch(deletePost(post._id))
    }
  }

  const onEdit = () => {
    dispatch(setCurrentId(post._id))
  }

  return (
    <div className="dashboard-card" >
      <p className="dash-title">{post.title}</p>
      <button className="dash-delete-btn" onClick={onDelete}>Delete</button>
      <Link to="dashboard/markdownform">
        <button className="dash-edit-btn" onClick={onEdit}>Edit</button>
      </Link>
    </div>
  )
}

export default DashbordCard
