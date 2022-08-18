import axios from 'axios'
import { useState } from 'react'

export default function FeaturedBook({ user, book, setUser }) {

    let bookCover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    let bookTitle = book.volumeInfo.title
    let bookSubtitle = book.volumeInfo.subtitle

    let allAuthors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null

    let [descrHover, setDescrHover] = useState(false)

    function handleOnDescHover() { setDescrHover(true) }
    function handleOffDescHover() { setDescrHover(false) }

    let bookDescription = book.volumeInfo.description.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')

    let shortenedDescription = bookDescription.slice(0, 750) + '...'

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

    function addToCurrentlyReading() {
        let obj = {
            book
        }
        axios.post('/addtocurrent', obj)
            .then(r => {
                if (r.data === 'This book is already in your list.') alert(r.data)
                else setUser(r.data)
            })
    }

    function removeFromCurrentlyReading() {
        let obj = {
            "id": book.id
        }
        axios.post('/removefromcurrent', obj)
            .then(r => {
                setUser(r.data)
            })
    }




    // const userCurrentButtons = user.current.map(book => book.id).includes(book.id) ? <button onClick={removeFromCurrentlyReading}> Remove from Currently Reading</button> : <button onClick={addToCurrentlyReading}> Add to Currently Reading</button>
    const displayUserButtons = user.username ? (user.current.map(book => book.id).includes(book.id) ? <button onClick={removeFromCurrentlyReading}> Remove from Currently Reading</button> : <button onClick={addToCurrentlyReading}> Add to Currently Reading</button>) : null
    return (
        <div className="featuredCard">
            <div className="featuredCardSide">
                <img className='featuredCardCover' src={bookCover} />
            </div>
            <div className="featuredCardMain">
                <div className="featuredCardInformation">
                    <h1 className="featuredTitle">{bookTitle}</h1>
                    <h4 className="featuredSubtitle">{bookSubtitle}</h4>
                    <h3 className="featuredAuthors">{allAuthors}</h3>
                    <hr></hr>
                    <div onMouseOver={handleOnDescHover} onMouseOut={handleOffDescHover} className=''>{bookDescriptionToDisplay}</div>
                    {displayFullDescription}
                    <hr></hr>
                    <div><b>Published:</b> {publishDate}</div>
                    <div><b>Pages:</b> {pageCount}</div>
                    <div><b>Language:</b> {language}</div>
                    <div><b>Categories:</b> {allCategories}</div>
                    {displayUserButtons}
                </div>
            </div>
        </div>
    )
}