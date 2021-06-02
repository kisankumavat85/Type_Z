import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'react-loader-spinner'
import { Redirect } from 'react-router-dom'

import '../styles/Dashboard.css'
import { getAllPosts } from '../actions/dashboardPosts'
import DashbordCard from '../Components/DashboardCard'
import { setCurrentPageDashboard, setIsLoggedIn } from '../actions/idFor';
import { setIsLoading } from '../actions/isLoading';


const Dashboard = () => {

  const [craetePost, setCreatePost] = useState(false)
  const dispatch = useDispatch()
  const posts = useSelector(state => state.dashboardPosts)
  const currentPage = useSelector((state) => state.idFor.currentPageDashboard)
  const isLoggedIn = useSelector((state) => state.idFor.isLoggedIn)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    dispatch(setIsLoading(true))
    dispatch(getAllPosts(currentPage))
  }, [currentPage])

  if (!isLoggedIn) {
    return <Redirect to="/" />
  }
  if (craetePost) {
    return <Redirect to="dashboard/markdownform" />
  }

  const onCreate = () => {
    setCreatePost(true)
  }

  const onLogout = () => {
    dispatch(setIsLoggedIn(false))
  }

  const handleNextPage = () => {
    dispatch(setIsLoading(true))
    dispatch(setCurrentPageDashboard(currentPage + 1))
  }
  const handlePreviousPage = () => {
    dispatch(setIsLoading(true))
    dispatch(setCurrentPageDashboard(currentPage - 1))
  }

  return (
    isLoading ? (
      <Loader type="ThreeDots" color="#000000" height={500} width={80} />
    ) : (
      <div className="dashboard-container">
        <div className="logout-div">
          <p className="welcome-p">Welcome back, Kisan</p>
          <div className="logout-span-div">
            <span className="logout-span" onClick={onCreate}>Create Post</span>
            <span className="logout-span" onClick={onLogout}>Logout</span>
          </div>
        </div>
        {
          posts.map((post) => <DashbordCard key={post._id} post={post} />)
        }
        <div className="page-div">
          {currentPage !== 1 ? <span className="previous-page" onClick={handlePreviousPage}>&lt;</span>
            : null}
          <span className="next-page" onClick={handleNextPage}>&gt;</span>
        </div>
      </div>
    )
  )
}

export default Dashboard
