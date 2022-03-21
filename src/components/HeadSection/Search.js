import React from 'react'
import {searchField} from './Search.module.css'

const Search = () => {
  return (
    <main>
        <input type="text" className={searchField} value={Search} placeHolder=" Sök"></input>
    </main>
  )
}

export default Search