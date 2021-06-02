import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from 'react-loader-spinner'

import { getComputerPosts } from '../actions/computerPosts'
import Cards from '../Components/Cards'
import { setIsLoading } from '../actions/isLoading';
import { setCurrentPageComputer } from '../actions/idFor'


const Computer = () => {

  const dispatch = useDispatch()
  const computerPosts = useSelector((state) => state.computerPosts)
  const currentPage = useSelector((state) => state.idFor.currentPageComputer)
  const isLoading = useSelector(state => state.isLoading)

  useEffect(() => {
    dispatch(setIsLoading(true))
    dispatch(getComputerPosts(currentPage))
  }, [dispatch, currentPage])

  return (
    isLoading ? (
      <Loader type="ThreeDots" color="#000000" height={500} width={80} />
    ) : (
      <Cards posts={computerPosts} setCurrentPage={setCurrentPageComputer} currentPage={currentPage} pageName={"COMPUTER"} />
    )
  )
}

export default Computer
