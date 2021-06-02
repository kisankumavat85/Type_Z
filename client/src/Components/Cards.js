import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setIsLoading } from '../actions/isLoading'
import Card from './Card'
import "../styles/Cards.css"

const Cards = ({ posts, setCurrentPage, currentPage, pageName }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setIsLoading(false))
  })

  const handleNextPage = () => {
    dispatch(setIsLoading(true))
    dispatch(setCurrentPage(currentPage + 1))
  }
  const handlePreviousPage = () => {
    dispatch(setIsLoading(true))
    dispatch(setCurrentPage(currentPage - 1))
  }

  return (
    <div className="container">
      <h4 className="page-heading">{pageName}</h4>
      <div className="card-container">
        {
          posts.map(post => <Card key={post._id} post={post} />)
        }
      </div>
      <div className="page-div">
        {currentPage !== 1 ? <span className="previous-page" onClick={handlePreviousPage}>&lt;</span>
          : null}
        {posts.length == 12 ? <span className="next-page" onClick={handleNextPage}>&gt;</span>
          : null}
      </div>
    </div>
  )
}

export default Cards
