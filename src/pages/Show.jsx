
import { Link, useParams } from "react-router-dom"
import { getShowById } from "../api/tvmaze"
import { useQuery } from "@tanstack/react-query"
import ShowMainData from "../components/shows/ShowMainData"
import Details from "../components/shows/Details"
import Seasons from "../components/shows/Seasons"
import Cast from "../components/shows/Cast"

const Show = () => {
  const { showId } = useParams()

  const { data: showData, error: ShowError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus:false
  })


  if (ShowError) {
    return <div>We have an Error: {ShowError.message}</div>
  }
  if (showData) {
    return <div>

    <Link to="/">GO back to Home</Link>
      <ShowMainData
        image={showData.image}
        name={showData.name}
        rating={showData.rating}
        summary={showData.summary}
        genres={showData.genres}
      />

      <div>
        <h2>Details</h2>
        <Details 
          status={showData.status}
          premiered={showData.premiered}
          network={showData.network}
        />
      </div>

      <div>
        <h2>Seasons</h2>
        <Seasons seasons={showData._embedded.seasons} />
      </div>
      <div>
        <h2>Casts</h2>
        <Cast cast={showData._embedded.cast}/>
      </div>
    </div>
  }
  
  return (
    <div>
      this is show page for {showId}
    </div>
  )
}

export default Show
