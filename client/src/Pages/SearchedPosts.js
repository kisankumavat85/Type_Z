import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'
import { useLocation } from 'react-router-dom'

import Cards from '../Components/Cards'
import { getSearchedPosts } from '../actions/searchedPosts'
import { setIsLoading } from '../actions/isLoading';
import { setCurrentPageSearch } from '../actions/idFor'


const SearchedPosts = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  const searchedPosts = useSelector((state) => state.searchedPosts)
  const currentPage = useSelector((state) => state.idFor.currentPageSearch)
  const isLoading = useSelector(state => state.isLoading)

  const { query } = location.state

  const modifiedQuery = {
    data: query.toString().split(" ")
  }

  useEffect(() => {
    dispatch(setIsLoading(true))
    dispatch(getSearchedPosts(currentPage, modifiedQuery))
  }, [dispatch, currentPage])

  return (
    isLoading ? (
      <Loader type="ThreeDots" color="#000000" height={500} width={80} />
    ) : (
      <Cards posts={searchedPosts} setCurrentPage={setCurrentPageSearch} currentPage={currentPage} pageName={"RESULT"} />
    )
  )
}

export default SearchedPosts
