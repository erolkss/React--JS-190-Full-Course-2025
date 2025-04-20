import React from 'react'

const Search = ({searchTerm, setSeachTerm}) => {
    return (
        <div className="search">
            <div>
                <img src="/public/search.svg" alt="Search Icon"/>
                <input
                    type="text"
                    placeholder="Search through thousends of movies"
                    value={searchTerm}
                    onChange={(e) => setSeachTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
export default Search
