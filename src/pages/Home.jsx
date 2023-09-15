import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchForShows,searchForPeople } from '../api/tvmaze';

const Home = () => {
  const [searchString, setSearchString] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption,setSearchOption]=useState('shows')

  // console.log(searchOption);

  const onSearchInputString = ev => {
    setSearchString(ev.target.value);
  };

  const onRadioChange=(ev)=>{
    setSearchOption(ev.target.value)
  }

  const onSearch = async ev => {
    ev.preventDefault();

    try {
      setApiDataError(null);
      if(searchOption==="shows"){
        const result = await searchForShows(searchString);
        setApiData(result);
      }else{
        const result = await searchForPeople(searchString);
        setApiData(result);
      }
      
    } catch (error) {
      setApiDataError(error);
    }
  };

  const dataShows = (data)=>{
    return <div key={data.show.id}>{data.show.name}</div>
  }
  const dataActors = (data)=>{
    return <div key={data.person.id}>{data.person.name}</div>
  }

  // const dataElem=(data)=>{
  //   if (searchOption==="shows"){
  //     return <div key={data.show.id}>{data.show.name}</div>
  //   }else{
  //     return <div key={data.person.id}>{data.person.name}</div>
  //   }
  // }

  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (apiData) {
      // return apiData[0].show ? apiData.map(data => dataShows(data)):apiData.map(data => dataActors(data))
      return   apiData.map(data => {
        return apiData[0].show? dataShows(data):dataActors(data)
        // return searchOption==="shows" ? dataShows(data):dataActors(data)
      
      })
    }

    return null;
  };
  return (
    <div>
      This is home page
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchString}
          onChange={onSearchInputString}
        />
         <label>
          Shows
          <input type="radio" name="search-option" checked={searchOption==='shows'} value="shows" onChange={onRadioChange }/>
         </label>
         <label>
          Actors
          <input type="radio" name="search-option" checked={searchOption==='actors'} value="actors" onChange={onRadioChange } />
         </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
