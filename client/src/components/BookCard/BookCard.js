export default function BookCard({book}) {

    let bookCover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    let bookTitle =  book.volumeInfo.title.length > 20 ? book.volumeInfo.title.slice(0,20)+'...' : book.volumeInfo.title 


    // let bookAuthor = book.volumeInfo.authors[0].length > 20 ? book.volumeInfo.authors[0].slice(0,20) +'...' : book.volumeInfo.authors[0]
    let authorToDisplay = book.volumeInfo.authors ? book.volumeInfo.authors[0].length > 20 ? book.volumeInfo.authors[0].slice(0,20) +'...' : book.volumeInfo.authors[0] : null
    let allAuthors = book.volumeInfo.authors ? book.volumeInfo.authors.map(author => 
        {return (<div className='bookAuthor'>{author}</div>)}
        ) : null
    return (
        <div className="bookCard">
            <div className="bookCardHalf top">
                <img className='bookCover' src={bookCover} alt={bookTitle} />
            </div>
            <div className="bookCardHalf bottom">
                <div className="bookTitle">{bookTitle}</div>
                {/* <div className='bookAuthor'>{authorToDisplay}</div> */}
                {allAuthors}

            </div>
        </div>
    )
}