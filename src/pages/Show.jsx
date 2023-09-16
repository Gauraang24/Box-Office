import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getShowById } from "../api/tvmaze"


const useShowByID = (showId) => {
  const [showData, setShowData] = useState(null)
  const [ShowError, setError] = useState(null)


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

  return { showData, ShowError }
}




const Show = () => {
  const { showId } = useParams()

  const {showData, ShowError}=useShowByID(showId)



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
