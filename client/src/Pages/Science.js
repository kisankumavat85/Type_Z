import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getSciencePosts } from '../actions/sciencePosts'
import Cards from '../Components/Cards'
import { setIsLoading } from '../actions/isLoading';
import { setCurrentPageScience } from '../actions/idFor'

const Science = () => {

  const dispatch = useDispatch()
  const sciencePosts = useSelector((state) => state.sciencePosts)
  const currentPage = useSelector((state) => state.idFor.currentPageScience)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    dispatch(setIsLoading(true))
    dispatch(getSciencePosts(currentPage))
  }, [dispatch, currentPage])

  return (
    isLoading ? (
      <Loader type="ThreeDots" color="#000000" height={500} width={80} />
    ) : (
      <Cards posts={sciencePosts} setCurrentPage={setCurrentPageScience} currentPage={currentPage} pageName={"SCIENCE"} />
    )
  )
}

export default Science
