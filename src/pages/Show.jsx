
import { useParams } from "react-router-dom"
import { getShowById } from "../api/tvmaze"
import { useQuery } from "@tanstack/react-query"






const Show = () => {
  const { showId } = useParams()

  const { data: showData, error: ShowError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId)
  })



  if (ShowError) {
    return <div>We have an Error: {ShowError.message}</div>
  }
  if (showData) {
    return <div>Got show data: {showData.name}</div>
  }




  return (
    <div>
      this is show page for {showId}
    </div>
  )
}

export default Show
