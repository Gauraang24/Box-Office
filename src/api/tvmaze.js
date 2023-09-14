const BASE_URL = "https://api.tvmaze.com"

const apiGet = async (queryString)=>{
    const res = await fetch(`${BASE_URL}${queryString}`)
    const body = await res.json()
    return body
}

// export const searchForShows = (query)=>{apiGet(`/search/shows?q=${query}`)}
export const searchForShows = (query) => {
    return apiGet(`/search/shows?q=${query}`);
  };