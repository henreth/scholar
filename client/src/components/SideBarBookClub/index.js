import axios from "axios"
import { useState } from "react"

export default function SideBarBookClub({ club, setUser, book, page }) {
    let inClub = club.books.length ? club.books.map(clubBook => clubBook.id).includes(book.id) : false

    let [clickedDropDown, setClickedDropDown] = useState(false)

    function handleClickRow() {
        setClickedDropDown(!clickedDropDown)
    }

    let showOptions = clickedDropDown && <div>
        <div className="clubOption">
            <div>Visit Club Page</div>
        </div>
        <div className="clubOption">
            {page === 'bookpage' && <div onClick={handleSubmit}>{inClub ? 'Remove from' : 'Add to'} Reading List</div>}
        </div>
    </div>


    let dropDownTriangle = clickedDropDown ? '▼' : '▲'

    function handleSubmit() {
        if (inClub) {
            let clubUpdate = {
                "club_id": club.id,
                "book_id": book.id,
            }
            axios.post('/removebookfromclub', clubUpdate)
                .then(r => {
                    setUser(r.data)
                })
            alert('This book has been removed from ' + club.name + '\s reading list.')
        } else {
            let clubUpdate = {
                "club_id": club.id,
                "book": book,
            }
            axios.post('/addbooktoclub', clubUpdate)
                .then(r => {
                    setUser(r.data)
                })
            alert('This book has been added to ' + club.name + '\s reading list')
        }
    }

    return (
        <div className="clubCard">
            <div className="clubrow" onClick={handleClickRow}>
                <div className="clubname">{club.name}</div>
                <div className='dropdown'>{dropDownTriangle}</div>
            </div>
            {showOptions}
        </div>
    )
}