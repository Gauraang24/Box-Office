import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [searchString, setSearchString] = useState("")

  const onSearchInputString = (ev) => {
    setSearchString(ev.target.value)
  }

  const onSearch = async (ev) => {
    ev.preventDefault()

    // fetch("https://api.tvmaze.com/search/shows?q=boys")
    // .then((response)=>{response.json()})
    // .then((body)=>{console.log(body)})

    const resp = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
    const body = await resp.json()

    console.log(body)
  }
  return (
    <div>
      This is home page


      <form onSubmit={onSearch}>
        <input type="text" value={searchString} onChange={onSearchInputString} />
        <button type='submit'>Search</button>
      </form>

    </div>
  )
}

export default Home
