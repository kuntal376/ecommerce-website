import React from "react";

const Search = () => {
    return (
        <div className="w-full flex items-center">
            <input
                type="text"
                className="search-bar w-full h-full border border-blue-600 rounded p-2"
                placeholder="Search Product Here..."
            />
            <button className="search-button p-2 bg-blue-600 text-white rounded ml-2">
                Search
            </button>
        </div>
    );
}
export default Search;