import { useState } from "react"

export default function BookCard({ book }) {
    let [displayTitle, setDisplayTitle] = useState(false)
    let bookCover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    let bookTitle = book.volumeInfo.title.length > 25 ? book.volumeInfo.title.slice(0, 25) + '...' : book.volumeInfo.title
    let titleClass = displayTitle ? 'bookTitle extended' : 'bookTitle'



    // let bookAuthor = book.volumeInfo.authors[0].length > 20 ? book.volumeInfo.authors[0].slice(0,20) +'...' : book.volumeInfo.authors[0]
    // let authorToDisplay = book.volumeInfo.authors ? bookAuthor : null
    let allAuthors = book.volumeInfo.authors ? book.volumeInfo.authors.map(author => { 
        let authorClass = displayTitle ? 'bookAuthor hidden' : 'bookAuthor'
        
        return (<div className={authorClass}>{author}</div>) }
    ) : null


    function handleMouseOver() { if (book.volumeInfo.title.length > 20) setDisplayTitle(true) }
    function handleMouseOff() { setDisplayTitle(false) }


    return (
        <div className="bookCard">
            <div className="bookCardHalf top">
                <img className='bookCover' src={bookCover} alt={bookTitle} />
            </div>
            <div className="bookCardHalf bottom">
                <div className={titleClass} onMouseOver={handleMouseOver} onMouseOut={handleMouseOff}>{displayTitle ? book.volumeInfo.title : bookTitle}</div>
                {/* {displayTitle ? <div className="bookTitle">{book.volumeInfo.title}</div> : null} */}
                {/* <div className='bookAuthor'>{authorToDisplay}</div> */}
                {allAuthors}

            </div>
        </div>
    )
}