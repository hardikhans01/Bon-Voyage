import React, { useState } from 'react';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    console.log(searchInput);
    return <div>
        <br></br>
        <h1 className="expnew">Explore New places</h1>
        <input
            type="search"
            placeholder="Search any place"
            onChange={handleChange}
            value={searchInput}
            className="searchba"
            onKeyDown={e => {
                console.log(e.key)
                if (e.key === "Enter") { window.location.href = `/search?city=${searchInput}`; console.log('here') }
            }}
        />
    </div>
};

export default SearchBar;