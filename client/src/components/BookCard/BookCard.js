import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function BookCard({ book }) {
    let [displayTitle, setDisplayTitle] = useState(false)
    let navigate = useNavigate()
    let bookCover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    let bookTitle = book.volumeInfo.title.length > 35 ? book.volumeInfo.title.slice(0, 35) + '...' : book.volumeInfo.title
    let titleClass =  book.volumeInfo.title.length > 25 ? 'bookTitle shrunk' : 'bookTitle'
    let displayTitleClass = displayTitle ? 'bookTitle extended' : titleClass
        let authorClass = displayTitle ? 'bookAuthor hidden' : 'bookAuthor'

    // let allAuthors = book.volumeInfo.authors ? book.volumeInfo.authors.map(author => { 
        
    //     return (<div className={authorClass}>{author}</div>) }
    // ) : null

    let allAuthors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null



    function handleMouseOver() { if (book.volumeInfo.title.length > 35) setDisplayTitle(true) }
    function handleMouseOff() { setDisplayTitle(false) }

    function handleCoverClick(){
        navigate('/book/'+book.id)
    }

    return (
        <div className="bookCard">
            <div className="bookCardHalf top">
                <img className='bookCover' src={bookCover} alt={bookTitle} onClick={handleCoverClick}/>
            </div>
            <div className="bookCardHalf bottom">
                <div className={displayTitleClass} onMouseOver={handleMouseOver} onMouseOut={handleMouseOff}>{displayTitle ? book.volumeInfo.title : bookTitle}</div>
                <div class={authorClass}>{allAuthors}</div>
            </div>
        </div>
    )
}