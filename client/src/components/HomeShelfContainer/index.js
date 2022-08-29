import { useState } from "react";
import BookContainer from "../BookContainer";
import BookClubCard from "../BookClubCard";

export default function HomeShelfContainer({ shelf, type }) {
    let [clickedTitle, setClickedTitle] = useState(true)
    function handleClickShelfName() {
        setClickedTitle(!clickedTitle)
    }
    let displayBookClub = type === 'club' ? <BookClubCard club={shelf} /> : null

    let displayBooksInShelf = clickedTitle ? <div className="homeshelfrow">
        {displayBookClub}
        <BookContainer
            books={shelf.books}
        />
    </div> : null;

    let dropDownTriangle = clickedTitle ? '▼' : '▲'


    return (
        <div className="homeshelfcontainer">
            <h2 onClick={handleClickShelfName}>{shelf.name}: <span>{dropDownTriangle}</span></h2>
            {displayBooksInShelf}
        </div>
    )
}