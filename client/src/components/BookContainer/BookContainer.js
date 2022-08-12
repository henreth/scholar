export default function BookContainer({ testData }) {

    if (!testData.items) return null


    let firstBook = testData.items[0].volumeInfo

    let bookCover = firstBook.imageLinks.thumbnail

    let bookTitle = firstBook.title
    let bookAuthor = firstBook.authors[0]

    return (
        <div className='bookContainer'>
            <div className="bookCard">
                <div className="bookCardHalf top">
                    <img className='bookCover' src={bookCover} />
                </div>
                <div className="bookCardHalf bottom">
                    <div className="bookTitle">{bookTitle}</div>
                    <div className='bookAuthor'>{bookAuthor}</div>
                </div>
            </div>
        </div>
    )
}