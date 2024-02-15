import { useState } from "react";
import "./SearchBar.scss"

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    reutrn(
        <form className="searchBar" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a card..." value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="submit">Search</button>
            <button type="button" onClick={handleScan}>Scan</button>
        </form>
    );
}

export default SearchBar