import { useState } from "react";
import "./SearchBar.scss"

function SearchBar({ onAddToStack }) {
    const [searchTerm, setSearchTerm] = useState("");

    const lookCardDetails = async (cardName) => {
        return { name: cardName, manaCost: "3", description: "Example card description" };
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!searchTerm) return;

        try {
            const cardDetetails = await lookCardDetails(searchTerm);
            onAddToStack(cardDetetails);
            setSearchTerm("");
        } catch (error) {
            console.error("Error looking card details", error)
        }
    };

    const handleScan = () => {
        console.log("activating camera for card scan...");

        const scannedCardDetails = { name: "Scanned Card", manaCos: "2", description: "Scanned card description"
        };
        onAddToStack(scannedCardDetails);
    };

    return(
        <form className="search-bar" onSubmit={handleSubmit}>
            <input className="seach-bar__input" type="text" placeholder="Search for a card..." value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="search-bar__search" type="submit">Search</button>
            <button className="search-bar__scan" type="button" onClick={handleScan}>Scan</button>
        </form>
    );
}

export default SearchBar