export default function FeaturedBook({book}) {
    let bookCover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    let bookTitle = book.volumeInfo.title
    let bookSubtitle = book.volumeInfo.subtitle

    let allAuthors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null

    let bookDescription = book.volumeInfo.description.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')

    let publishDate = new Date(book.volumeInfo.publishedDate).toDateString()
    // let publishYear = publishDate.getFullYear()

    let language = book.volumeInfo.language
    let pageCount = book.volumeInfo.pageCount

    function capitalize(str){
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }

    let categories = book.volumeInfo.categories ? book.volumeInfo.categories.join(' / ').split(' / ').map(cat=>capitalize(cat)) : ''
    let allCategories =  book.volumeInfo.categories ? categories.filter((cat,idx)=>categories.indexOf(cat) == idx).join(' / ') : ''


    return (
        <div className="bookPageCard">
            <div className="bookPageCardSide">
                <img className='bookPageCardCover' src={bookCover} />
            </div>
            <div className="bookPageCardMain">
                <div className="bookPageCardInformation">
                    <h1 className="bookPageTitle">{bookTitle}</h1>
                    <h4 className="bookPageSubtitle">{bookSubtitle}</h4>
                    <h3 className="bookPageAuthors">{allAuthors}</h3>
                    <hr></hr>
                    <div>{bookDescription}</div>
                    <hr></hr>
                    <div><b>Published:</b> {publishDate}</div>
                    <div><b>Pages:</b> {pageCount}</div>
                    <div><b>Language:</b> {language}</div>
                    <div><b>Categories:</b> {allCategories}</div>
                </div>
            </div>
        </div>
    )
}