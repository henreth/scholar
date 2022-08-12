export default function BookCard({book}) {

    let bookCover = book.volumeInfo.imageLinks.thumbnail

    let bookTitle =  book.volumeInfo.title.length > 20 ? book.volumeInfo.title.slice(0,20)+'...' : book.volumeInfo.title 

    let bookAuthor = book.volumeInfo.authors[0]

    return (
        <div className="bookCard">
            <div className="bookCardHalf top">
                <img className='bookCover' src={bookCover} />
            </div>
            <div className="bookCardHalf bottom">
                <div className="bookTitle">{bookTitle}</div>
                <div className='bookAuthor'>{bookAuthor}</div>
            </div>
        </div>
    )
}