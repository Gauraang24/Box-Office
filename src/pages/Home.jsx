import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';

const Home = () => {

  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);








  const onSearch = async elem => {

    const { q, option } = elem
    try {
      setApiDataError(null);
      if (option === "shows") {
        const result = await searchForShows(q);
        setApiData(result);
      } else {
        const result = await searchForPeople(q);
        setApiData(result);
      }
    } catch (error) {
      setApiDataError(error);
    }
  };



  const dataShows = (data) => {
    return <div key={data.show.id}>{data.show.name}</div>
  }
  const dataActors = (data) => {
    return <div key={data.person.id}>{data.person.name}</div>
  }


  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData.map(data => {
        return apiData[0].show ? dataShows(data) : dataActors(data)

      })
    }

    return null;
  };
  return (
    <div>
      This is home page
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
