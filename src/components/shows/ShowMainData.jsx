import React from 'react'

const ShowMainData = ({ image, name, rating, summary, genres }) => {
    return (
        <div>
            <img src={image ? image.original : '/not-found-image.png'} alt={name} />

            <div>
                <h1>{name}</h1>
                <div>{rating.average || "N/A"}</div>
                {/* <div>{summary}</div> */}
                <div dangerouslySetInnerHTML={{ __html: summary }} />

                <div>
                    Genres:
                    {genres.map((g)=>{
return <span key={g}>{` ${g} `}</span>
                    })}
                </div>
            </div>
        </div>

    )
}

export default ShowMainData
