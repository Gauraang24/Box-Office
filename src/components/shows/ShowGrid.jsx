import { FlexGrid } from "../../common/FlexGrid";
import { useStarredShows } from "../../lib/useStarredShows";
import ShowCard from "./ShowCard";
import NotFoundImgSrc from "../../lib/not-found-image.png"

const ShowGrid = ({ show }) => {

    const [starredShows, dispatchStarred] = useStarredShows()

    // const [starredShows, dispatchStarred] = usePersistedReducer(starredShowsReducer, [], 'starredShows')


    const onStarMeClick = showId => {
        const isStarred = starredShows.includes(showId)

        if (isStarred) {
            dispatchStarred({ type: 'UNSTAR', showId })
        } else {
            dispatchStarred({ type: "STAR", showId })
        }

    }
    return (
        <FlexGrid>
            {show.map((data) => (

                <ShowCard key={data.show.id}
                    id={data.show.id}
                    name={data.show.name}
                    image={data.show.image ? data.show.image.medium : NotFoundImgSrc}
                    summary={data.show.summary}
                    onStarClick={onStarMeClick}
                    isStarred={starredShows.includes(data.show.id)}

                />
            ))}
        </FlexGrid>
    )
}

export default ShowGrid;






///////////////////////////////////////////////////////////////////////////


/*
import React, { useEffect, useState } from "react";
import ShowCard from "./ShowCard";

const ShowGrid = ({ show }) => {
    const localStorageKey = "starredShows";
    const [starredShows, setStarredShows] = useState(() => {
        const persistedValue = localStorage.getItem(localStorageKey);
        return persistedValue ? JSON.parse(persistedValue) : [];
    });

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(starredShows));
    }, [starredShows]);

    const onStarMeClick = (showId) => {
        const isStarred = starredShows.includes(showId);

        if (isStarred) {
            // Remove the showId from starredShows
            setStarredShows((prevStarredShows) =>
                prevStarredShows.filter((id) => id !== showId)
            );
        } else {
            // Add the showId to starredShows
            setStarredShows((prevStarredShows) => [...prevStarredShows, showId]);
        }
    };

    return (
        <div>
            {show.map((data) => (
                <ShowCard
                    key={data.show.id}
                    id={data.show.id}
                    name={data.show.name}
                    image={data.show.image ? data.show.image.medium : NotFoundImgSrc}
                    summary={data.show.summary}
                    isStarred={starredShows.includes(data.show.id)}
                    onStarClick={onStarMeClick}
                />
            ))}
        </div>
    );
};

export default ShowGrid;
*/


//////////////////////////////////////////////////////////////////////////