import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getShowById } from "../api/tvmaze"


const Show = () => {
  const { showId } = useParams()

  const [showData, setShowData] = useState(null)
  const [error, setError] = useState(null)


  useEffect(() => {

    async function fetchdata() {

      try {
        const data = await getShowById(showId)
        setShowData(data)

      } catch (err) {
        setError(err)
      }


    }

    fetchdata()

  }, [showId])

  if(error){
    return <div>We have an error: {error.message}</div>
  }
  if(showData){
    return <div>Got show data: {showData.name}</div>
  }




  return (
    <div>
      this is show page for {showId}
    </div>
  )
}

export default Show
