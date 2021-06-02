import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getAllPosts } from '../actions/posts'
import { setIsLoading } from '../actions/isLoading';
import { setCurrentPageHome } from '../actions/idFor'
import Cards from '../Components/Cards'

const Home = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.isLoading)
  const currentPage = useSelector((state) => state.idFor.currentPageHome)
  const homePosts = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(setIsLoading(true))
    dispatch(getAllPosts(currentPage))
  }, [dispatch, currentPage])

  return (
    isLoading ? (
      <Loader type="ThreeDots" color="#000000" height={500} width={80} />
    ) : (
      <Cards posts={homePosts} setCurrentPage={setCurrentPageHome} currentPage={currentPage} pageName={"LATEST"} />
    )
  )
}

export default Home
