export default function FeaturedBook({book}) {
    let bookCover = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ''

    let bookTitle = book.volumeInfo.title
    let bookSubtitle = book.volumeInfo.subtitle

    let allAuthors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : null

    let bookDescription = book.volumeInfo.description.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')

    let shortenedDescription = bookDescription.slice(0,750)+'...'

    let bookDescriptionToDisplay = bookDescription.length > 1000 ? shortenedDescription : bookDescription


    let publishDate = new Date(book.volumeInfo.publishedDate).toDateString()

    let language = book.volumeInfo.language
    let pageCount = book.volumeInfo.pageCount

    function capitalize(str){
        let words = str.split(' ')
        return words.map(word=> word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    }

    let categories = book.volumeInfo.categories ? book.volumeInfo.categories.join(' / ').split(' / ').map(cat=>capitalize(cat)) : ''
    let allCategories =  book.volumeInfo.categories ? categories.filter((cat,idx)=>categories.indexOf(cat) == idx).join(' / ') : ''


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
                    <div>{bookDescriptionToDisplay}</div>
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