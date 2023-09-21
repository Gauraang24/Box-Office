import { useEffect, useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";

const SearchForm = ({ onSearch }) => {
    const [searchString, setSearchString] = useSearchStr('');
    const [searchOption, setSearchOption] = useState('shows')

    // console.log("component rerended")
    useEffect(()=>{
        console.log(" 001 search option changed", searchOption)

        return ()=>{
            console.log("002 before next useEffect", searchOption)
        }
    },[searchOption])

    const onSearchInputString = ev => {
        setSearchString(ev.target.value);
    };
    const onRadioChange = (ev) => {
        setSearchOption(ev.target.value)
    }

    const onSubmit = (ev) => {
        ev.preventDefault()

        const elem = {
            q: searchString,
            option: searchOption
        }

        onSearch(elem)
    }


    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={searchString}
                onChange={onSearchInputString}
            />
            <label>
                Shows
                <input type="radio" name="search-option" checked={searchOption === 'shows'} value="shows" onChange={onRadioChange} />
            </label>
            <label>
                Actors
                <input type="radio" name="search-option" checked={searchOption === 'actors'} value="actors" onChange={onRadioChange} />
            </label>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm
