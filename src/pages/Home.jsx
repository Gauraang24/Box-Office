import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { searchForShows } from '../api/tvmaze'

const Home = () => {

  const [searchString, setSearchString] = useState("")
  const [apiData, setApiData] = useState(null)
  const [apiDataError, setApiDataError] = useState(null)

  console.log(apiDataError)

  const onSearchInputString = (ev) => {
    setSearchString(ev.target.value)
  }

  const onSearch = async (ev) => {
    ev.preventDefault()
    

    // fetch("https://api.tvmaze.com/search/shows?q=boys")
    // .then((response)=>{response.json()})
    // .then((body)=>{console.log(body)})

    // const resp = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`)
    // const body = await resp.json()

    // console.log(body)

    try {

      setApiDataError(null)
      const result = await searchForShows(searchString)
      setApiData(result)
    } catch (error) {
      setApiDataError(error)
    }


  }

  const renderApiData = () => {
    if (apiDataError){
      return <div>Error occured: {apiDataError.message}</div>
    }

    if (apiData) {
      return apiData.map((data) => { return <div key={data.show.id}>{data.show.name}</div> })
    }

    return null
  }
  return (
    <div>
      This is home page


      <form onSubmit={onSearch}>
        <input type="text" value={searchString} onChange={onSearchInputString} />
        <button type='submit'>Search</button>
      </form>
      <div>
        {renderApiData()}
      </div>

    </div>
  )
}

export default Home
