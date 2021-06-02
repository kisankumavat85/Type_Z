import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/PageNotFound.css'

const PageNotFound = () => {

  return (
    <div className="page-not-found-div">
      <i class="fas fa-ghost"></i>
      <h1 className="error-h1">404</h1>
      <p className="error-p">PAGE NOT FOUND</p>
      <p className="error-p2">Go to <Link to="/">Home</Link></p>
    </div>
  )
}

export default PageNotFound
