// import { useEffect, useReducer } from "react";
// import ShowCard from "./ShowCard";
// import { json } from "react-router-dom";




// const usePersistedReducer = (reducer, initialState, localStorageKey) => {
//     const [state, dispatch] = useReducer(reducer, initialState, initial => {
//         const persistedValue = localStorage.getItem(localStorageKey)

//         return persistedValue ? JSON.parse(persistedValue) : initial
//     })

//     useEffect(() => {
//         localStorage.setItem(localStorageKey, JSON.stringify(state))
//     }, [state, localStorageKey])

//     return [state, dispatch]
// }

// const starredShowsReducer = (currentStared, action) => {
//     switch (action.type) {
//         case "STAR":
//             return currentStared.concat(action.showId)
//         case "UNSTAR":
//             return currentStared.filter(showId => showId !== action.showId)

//         default:
//             return currentStared
//     }
// }


// const ShowGrid = ({ show }) => {

//     const [starredShows, dispatchStarred] = usePersistedReducer(starredShowsReducer, [], 'starredShows')

//     // console.log({starredShows})

//     // usePersistedReducer(reducer, [], '')

//     const onStarMeClick = showId => {
//         const isStarred = starredShows.includes(showId)

//         if (isStarred) {
//             dispatchStarred({ type: 'UNSTAR', showId })
//         } else {
//             dispatchStarred({ type: "STAR", showId })
//         }

//     }
//     return (
//         <div>
//             {show.map((data) => (

//                 <ShowCard key={data.show.id}
//                     id={data.show.id}
//                     name={data.show.name}
//                     image={data.show.image ? data.show.image.medium : '/not-found-image.png'}
//                     summary={data.show.summary}
//                     onStarClick={onStarMeClick}
//                 // onStarClick={onStarMeClick}
//                 />
//             ))}
//         </div>
//     )
// }

// export default ShowGrid;


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
                    image={data.show.image ? data.show.image.medium : "/not-found-image.png"}
                    summary={data.show.summary}
                    isStarred={starredShows.includes(data.show.id)}
                    onStarClick={onStarMeClick}
                />
            ))}
        </div>
    );
};

export default ShowGrid;

