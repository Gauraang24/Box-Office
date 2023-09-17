import React from 'react'

const Details = ({status,premiered,network}) => {
  return (
    <div>
     <p>Status: {status}</p>
     <p>
        Premiered on: {premiered} {network ? `on ${network.name}`: null}
     </p>
    </div>
  )
}

export default Details