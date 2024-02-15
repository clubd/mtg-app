import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import StackBox from "../../components/StackBox/StackBox";

function HomePage() {
    const [stack, setStack] = useState([]);

    const handleAddToStack = (card) => {
        setStack(prevStack => [...prevStack, card]);
    };
    return (
        <div>
            <SearchBar onAddToStack={handleAddToStack} />
            <StackBox stack={stack} />
        </div>
    )
}

export default HomePage;
