import React from 'react'

const Seasons = ({ seasons }) => {
    return (
        <div>
            <p>Seasons in total: {seasons.length}</p>

            <p>
                Episodes in total: {" "}
                {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
            </p>

            <div>
                {seasons.map((s) => {
                    return <div key={s.id}>
                        <p>Season {s.number}</p>
                        <p>Episodes: {s.episodeOrder}</p>

    
                        <div>
                        Aired: {s.premiereDate} - {s.endDate}
                        </div>
                    </div>

                })}
            </div>
        </div>
    )
}

export default Seasons
