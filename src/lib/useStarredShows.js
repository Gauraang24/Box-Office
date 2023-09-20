import { useEffect, useReducer } from "react";

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
        const persistedValue = localStorage.getItem(localStorageKey)

        return persistedValue ? JSON.parse(persistedValue) : initial
    })

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(state))
    }, [state, localStorageKey])

    return [state, dispatch]
}

const starredShowsReducer = (currentStared, action) => {
    switch (action.type) {
        case "STAR":
            return currentStared.concat(action.showId)
        case "UNSTAR":
            return currentStared.filter(showId => showId !== action.showId)

        default:
            return currentStared
    }
}

export const useStarredShows = () => {
    return usePersistedReducer(
        starredShowsReducer,
        [],
        "starredShows"
    )
}