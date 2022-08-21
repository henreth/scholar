import axios from 'axios'
import { useState } from 'react'

export default function FeaturedBook({ user, book, setUser, userShelves, setUserShelves }) {
    let [selectedStatus, setSelectedStatus] = useState(-1)
    function handleStatusChange(e) {
        setSelectedStatus(e.target.value)
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
        if (selectedStatus === -1) {

        } else {
            let shelf = statusShelves[selectedStatus]
            let inShelf = shelf.books.map(shelfBook => shelfBook.id).includes(book.id)
            if (inShelf) {
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
            }
        }

    }

    let statusShelves = userShelves.slice(0, 4)
    let listShelves = userShelves.slice(4,)

    let statusShelvesToDisplay = user.username ? (statusShelves.map((shelf, idx) => {
        return shelf.books.map(shelfBook => shelfBook.id).includes(book.id) ? <option value={Number(idx)}>✓ Added to {shelf.name}</option> : <option value={Number(idx)}>{shelf.name}</option>
    })) : null

    let listShelvesToDisplay = user.username ? (listShelves.map(shelf => {
        return shelf.books.map(shelfBook => shelfBook.id).includes(book.id) ? <option>✓ Added to {shelf.name}</option> : <option>{shelf.name}</option>
    })) : null

    return (
        <div className="featuredCard">
            <div className="featuredCardSide">
                <img className='featuredCardCover' src={bookCover} />
            </div>
            <div className="featuredCardMain">
                <div className="featuredCardInformation">
                    <h1 className="featuredTitle">{bookTitle}<span>  - {allAuthors}</span></h1>
                    {bookSubtitle ? <h4 className="featuredSubtitle">{bookSubtitle}</h4> : null}
                    <hr></hr>
                    <div onMouseOver={handleOnDescHover} onMouseOut={handleOffDescHover} className=''>{bookDescriptionToDisplay}</div>
                    {displayFullDescription}
                    <hr></hr>
                    <div><b>Pages:</b> {pageCount}</div>
                    <div><b>Language:</b> {language.toUpperCase()}</div>
                    <div><b>Published:</b> {publishDate}</div>
                    <div><b>Categories:</b> {allCategories}</div>
                    <hr></hr>
                </div>
                <div className='featuredCardBottom'>
                    <div className='shelfRow'>
                        <div>Status: </div>
                        <select onChange={handleStatusChange}>
                            <option value={'-1'}>Options:</option>
                            {statusShelvesToDisplay}
                        </select>
                        <button onClick={handleStatusSubmit} disabled={selectedStatus == -1}>Confirm</button>
                    </div>
                    <div className='shelfRow'>
                        <div>Add to a Shelf:</div>
                        <select>
                            {/* <option>Add to a Shelf:</option> */}
                            {listShelves.length ? listShelvesToDisplay : <option>Create a New Shelf</option>}
                        </select>
                        <button>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}