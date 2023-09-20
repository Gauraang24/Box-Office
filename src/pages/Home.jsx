import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchForShows, searchForPeople } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';

const Home = () => {


  const [filter, setFilter] = useState(null)
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: () => filter.option === "shows" ? searchForShows(filter.q) : searchForPeople(filter.q),
    // disabled as long AS THE FILTER IS EMPTY

    enabled: !!filter,
    refetchOnWindowFocus: false
  })

  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);


  const onSearch = async ({ q, option }) => {

    setFilter({ q, option })
    //   const { q, option } = elem
    //   try {
    //     setApiDataError(null);
    //     if (option === "shows") {
    //       const result = await searchForShows(q);
    //       setApiData(result);
    //     } else {
    //       const result = await searchForPeople(q);
    //       setApiData(result);
    //     }
    //   } catch (error) {
    //     setApiDataError(error);
    //   }
  };


  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }
    if (apiData?.length === 0) {
      return <div>No results found</div>
    }

    if (apiData) {

      return apiData[0].show ? (<ShowGrid show={apiData} />) : (<ActorsGrid actor={apiData} />)



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
