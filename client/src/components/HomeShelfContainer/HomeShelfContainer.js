import { useState } from "react";
import BookContainer from "../BookContainer/BookContainer";

export default function HomeShelfContainer({ shelf }) {
    let [clickedTitle, setClickedTitle] = useState(true)
    function handleClickShelfName() {
        setClickedTitle(!clickedTitle)
    }
    let displayBooksInShelf = clickedTitle ? <div className="homeshelfrow">
        <BookContainer
            books={shelf.books} />
    </div> : null;

    let dropDownTriangle = clickedTitle ? '▼' : '▲'

    return (
        <div className="homeshelfcontainer">
                <h1 onClick={handleClickShelfName}>{shelf.name}: <span>{dropDownTriangle}</span></h1>
            {displayBooksInShelf}
        </div>
    )
}