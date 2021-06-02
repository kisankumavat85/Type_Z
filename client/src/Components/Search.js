import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/Search.css'

const Search = () => {

  const [query, setQuery] = useState('')

  const handleClick = (e) => {
    setQuery('')
  }

  return (
    <form className="saerch-form">
      <input
        placeholder="Search"
        name="terms"
        value={query}
        onChange={e => setQuery(e.target.value)}
        type="text" />
      <button onClick={handleClick}>
        <Link to={{
          pathname: "/search",
          state: { query }
        }}><i class="fas fa-search"></i></Link>
      </button>
    </form>
  )
}

export default Search
