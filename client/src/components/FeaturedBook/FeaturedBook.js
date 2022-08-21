import axios from 'axios'
import { useEffect, useState } from 'react'

export default function FeaturedBook({ user, book, setUser, userShelves, setUserShelves }) {

    useEffect(()=>{userShelves.sort((a,b)=>a.id-b.id)},[userShelves])
    let [selectedStatus, setSelectedStatus] = useState(-1)
    function handleStatusChange(e) {
        setSelectedStatus(e.target.value)
    }
    let [displayNewShelfForm, setDisplayNewShelfForm] = useState(false)
    let [selectedShelf, setSelectedShelf] = useState(-1)
    function handleShelfChange(e) {
        setDisplayNewShelfForm(false)
        setSelectedShelf(e.target.value)
    }

    let [newShelfName, setNewShelfName] = useState('')
    function handleNewShelfNameChange(e) {
        setNewShelfName(e.target.value)
    }

    let bookCover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    let bookTitle = book.volumeInfo.title
    let bookSubtitle = book.volumeInfo.subtitle

    let allAuthors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null

    let [descrHover, setDescrHover] = useState(false)

    function handleOnDescHover() { setDescrHover(true) }
    function handleOffDescHover() { setDescrHover(false) }

    let bookDescription = book.volumeInfo.description.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')

    let shortenedDescription = bookDescription.slice(0, 750) + '... (hover to read more)'

    let bookDescriptionToDisplay = bookDescription.length > 1000 ? shortenedDescription : bookDescription

    const displayFullDescription = descrHover && bookDescription.length > 1000 ? <div onMouseOver={handleOnDescHover} onMouseOut={handleOffDescHover} className='fullDescription'>
        <h3>Description: </h3>
        <div>{bookDescription}</div>
    </div> : null


    let publishDate = new Date(book.volumeInfo.publishedDate).toDateString()

    let language = book.volumeInfo.language
    let pageCount = book.volumeInfo.pageCount

    function capitalize(str) {
        let words = str.split(' ')
        return words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    }

    let categories = book.volumeInfo.categories ? book.volumeInfo.categories.join(' / ').split(' / ').map(cat => capitalize(cat)) : ''
    let allCategories = book.volumeInfo.categories ? categories.filter((cat, idx) => categories.indexOf(cat) == idx).join(' / ') : ''


    // to handle changing the status
    // identify the the non selected status options and make three separate posts requests to remove the book from them 
    function handleStatusSubmit() {
        if (selectedStatus == -1) {

        } else {
            let shelf = statusShelves[selectedStatus]
            let inShelf = shelf.books.map(shelfBook => shelfBook.id).includes(book.id)
            let ids = [0, 1, 2, 3]
            if (inShelf) {
                ids.splice(selectedStatus, 1)
                console.log(ids)
                let shelfUpdate = {
                    "shelf_id": shelf.id,
                    "book_id": book.id,
                }
                axios.post('/removebook', shelfUpdate)
                    .then(r => {
                        let updatedShelves = userShelves
                        updatedShelves[selectedStatus] = r.data
                        setUserShelves(updatedShelves)
                    })
            } else {

                let shelfUpdate = {
                    "shelf_id": shelf.id,
                    "book": book,
                }
                axios.post('/addbook', shelfUpdate)
                    .then(r => {
                        let updatedShelves = userShelves
                        updatedShelves[selectedStatus] = r.data
                        setUserShelves(updatedShelves)
                    })
                ids.splice(selectedStatus, 1)
                for (let id of ids) {
                    let otherShelf = statusShelves[id]
                    let inOtherShelf = otherShelf.books.map(shelfBook => shelfBook.id).includes(book.id)
                    if (inOtherShelf) {
                        let shelfUpdate = {
                            "shelf_id": otherShelf.id,
                            "book_id": book.id,
                        }
                        axios.post('/removebook', shelfUpdate)
                            .then(r => {
                                let updatedShelves = userShelves
                                updatedShelves[id] = r.data
                                setUserShelves(updatedShelves)
                                console.log(r.data)
                            })
                    }
                }
            }
        }

    }

    function handleShelfSubmit() {
        if (selectedShelf == -1) {
            setDisplayNewShelfForm(true)
        } else {
            const shelfIndex = 4 + Number(selectedShelf)
            let shelf = userShelves[shelfIndex]
            let inShelf = shelf.books.map(shelfBook => shelfBook.id).includes(book.id)
            if (inShelf) {
                let shelfUpdate = {
                    "shelf_id": shelf.id,
                    "book_id": book.id,
                }
                axios.post('/removebook', shelfUpdate)
                    .then(r => {
                        let updatedShelves = userShelves
                        updatedShelves[shelfIndex] = r.data
                        setUserShelves(updatedShelves)
                    })
            } else {
                let shelfUpdate = {
                    "shelf_id": shelf.id,
                    "book": book,
                }
                axios.post('/addbook', shelfUpdate)
                    .then(r => {
                        let updatedShelves = userShelves
                        updatedShelves[shelfIndex] = r.data
                        setUserShelves(updatedShelves)
                        console.log(r.data)
                    })
            }
        }
    }

    function handleAddNewShelfCancel() {
        setDisplayNewShelfForm(false)
    }

    function handleAddNewShelfSubmit() {
        let newShelf = {
            "name": newShelfName,
            "user_id": user.id
        }
        axios.post('/shelves', newShelf)
            .then(r => {
                setUserShelves([...userShelves, r.data])
                console.log(r.data)
            })
        setDisplayNewShelfForm(false)
        setNewShelfName('')
    }

    let statusShelves = userShelves.slice(0, 4)
    let listShelves = userShelves.slice(4,)

    let statusShelvesToDisplay = user.username ? (statusShelves.map((shelf, idx) => {
        return shelf.books.map(shelfBook => shelfBook.id).includes(book.id) ? <option value={Number(idx)}>✓ Added to {shelf.name}</option> : <option value={Number(idx)}>{shelf.name}</option>
    })) : null

    let listShelvesToDisplay = user.username ? (listShelves.map((shelf, idx) => {
        return shelf.books.map(shelfBook => shelfBook.id).includes(book.id) ? <option value={Number(idx)}>✓ Added to {shelf.name}</option> : <option value={Number(idx)}>{shelf.name}</option>
    })) : null

    let statusButtonText = selectedStatus == -1 ? 'Add' : userShelves[selectedStatus].books.map(shelfBook => shelfBook.id).includes(book.id) ? 'Remove' : 'Add'
    let shelfButtonText = selectedShelf == -1 ? 'Confirm' : userShelves[4 + Number(selectedShelf)].books.map(shelfBook => shelfBook.id).includes(book.id) ? 'Remove' : 'Add'
    let newShelvesToDisplay = listShelves.length ? listShelvesToDisplay : null
    let newShelfForm = displayNewShelfForm ? <div className='shelfRow'>
        <div>Name:</div>
        <input
            type='text'
            value={newShelfName}
            onChange={handleNewShelfNameChange}
            placeholder='Enter a Shelf Name' />
        <button onClick={handleAddNewShelfSubmit}>Submit</button>
    </div> : null
    let shelfButton = !displayNewShelfForm ? <button onClick={handleShelfSubmit}>{shelfButtonText}</button> : <button onClick={handleAddNewShelfCancel}>Cancel</button>
    let displayBookSubtitle = bookSubtitle ? <h4 className="featuredSubtitle">{bookSubtitle}</h4> : null
    return (
        <div className="featuredCard">
            <div className="featuredCardSide">
                <img className='featuredCardCover' src={bookCover} />
            </div>
            <div className="featuredCardMain">
                <div className="featuredCardInformation">
                    <h1 className="featuredTitle">{bookTitle}<span>  - {allAuthors}</span></h1>
                    {displayBookSubtitle}
                    <hr></hr>
                    <div onMouseOver={handleOnDescHover} onMouseOut={handleOffDescHover} className='bookDescription'>{bookDescriptionToDisplay}</div>
                    {displayFullDescription}
                    <hr></hr>
                    <div className='moreInfo'><b>Pages:</b> {pageCount}</div>
                    <div className='moreInfo'><b>Language:</b> {language.toUpperCase()}</div>
                    <div className='moreInfo'><b>Published:</b> {publishDate}</div>
                    <div className='moreInfo'><b>Categories:</b> {allCategories}</div>
                    <hr></hr>
                </div>
                <div className='featuredCardBottom'>
                    <div className='shelfRow'>
                        <div>Status: </div>
                        <select onChange={handleStatusChange}>
                            <option value={-1}>Options:</option>
                            {statusShelvesToDisplay}
                        </select>
                        <button onClick={handleStatusSubmit} disabled={selectedStatus == -1}>{statusButtonText}</button>
                    </div>
                    <div className='shelfRow'>
                        <div>Add to a Shelf:</div>
                        <select onChange={handleShelfChange}>
                            <option value={-1}>Create a New Shelf</option>
                            {newShelvesToDisplay}
                        </select>
                        {shelfButton}
                    </div>
                    {newShelfForm}
                </div>
            </div>
        </div>
    )
}