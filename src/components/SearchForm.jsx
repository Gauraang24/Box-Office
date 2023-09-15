import { useState } from "react";

const SearchForm = ({ onSearch }) => {
    const [searchString, setSearchString] = useState('');
    const [searchOption, setSearchOption] = useState('shows')

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
