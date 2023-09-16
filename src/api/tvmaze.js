

const apiGet = async queryString => {
  const res = await fetch(`https://api.tvmaze.com${queryString}`);
  const body = await res.json();
  return body;
};


export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);
export const getShowById = (showID) => apiGet(`/shows/${showID}`);