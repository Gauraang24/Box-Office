

const apiGet = async queryString => {
  const res = await fetch(`https://api.tvmaze.com${queryString}`);
  const body = await res.json();
  return body;
};


export const searchForShows = query => apiGet(`/search/shows?q=${query}`);
export const searchForPeople = query => apiGet(`/search/people?q=${query}`);
export const getShowById = (showID) => apiGet(`/shows/${showID}?embed[]=seasons&embed[]=cast`);


export const getShowsByIds = async (showIds) => {
  const apiRequestPromises = showIds.map(val => apiGet(`/shows/${val}`))

  // const result = await Promise.all(apiRequestPromises)

  return Promise.all(apiRequestPromises)
}