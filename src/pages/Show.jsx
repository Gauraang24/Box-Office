import { useParams } from "react-router-dom"


const Show = () => {
    const {showId} = useParams()

    // console.log(params)
  return (
    <div>
      this is show page for {showId}
    </div>
  )
}

export default Show
