import { useState } from "react";
import BookContainer from "../BookContainer";
import BookClubCard from "../BookClubCard";
import axios from "axios";

export default function HomeShelfContainer({ shelf, type,userShelves, setUserShelves, idx }) {
    let [clickedTitle, setClickedTitle] = useState(true)
    function handleClickShelfName() {
        setClickedTitle(!clickedTitle)
    }
    let [clickedDelete, setClickedDelete] = useState(false)

    function handleDeleteClick() {
        setClickedDelete(!clickedDelete)
    }

    function handleClickCancel() {
        setClickedDelete(false)
    }


    let displayBookClub = type === 'club' ? <BookClubCard club={shelf} /> : null

    let displayBooksInShelf = clickedTitle ? <div className="homeshelfrow">
        {displayBookClub}
        <BookContainer
            books={shelf.books}
        />
    </div> : null;

    let dropDownTriangle = clickedTitle ? '▼' : '▲'


    let buttonOptions = clickedDelete ? <div className="homeShelfButtons">
        <span className="reviewbuttonlabel">Are you sure?</span>
        <button onClick={handleClickCancel}>Cancel</button>
        <button onClick={handleConfirmDelete}>Confirm</button>
    </div > : <button onClick={handleDeleteClick}>Delete Shelf</button>


    function handleConfirmDelete() {
        let shelfToDelete = { "id": shelf.id }
        axios.post('/removeshelf', shelfToDelete)
            .then(r => {
                let updatedUserShelves = userShelves.filter(userShelf=> userShelf.id !== shelf.id)
                setUserShelves(updatedUserShelves)
                alert(shelf.name + ' has been deleted!')
                setClickedDelete(false)
            })
    }

    let buttonsToDisplay = type === 'shelf' && idx > 3 && clickedTitle ? buttonOptions : null
    return (
        <div className="homeshelfcontainer">
            <div className="homeShelfTitle">
                <h2 onClick={handleClickShelfName}>{shelf.name}: <span>{dropDownTriangle}</span></h2>
                {buttonsToDisplay}
            </div>
            {displayBooksInShelf}
        </div>
    )
}