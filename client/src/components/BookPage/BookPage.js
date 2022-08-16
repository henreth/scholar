import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import key from '../../apiKey'

export default function BookPage() {
    let params = useParams()
    let id = params.id
    let [pageData, setPageData] = useState({})


    useEffect(() => {
        let url = "https://www.googleapis.com/books/v1/volumes/" + id + '?&key=' + key
        axios.get(url)
            .then(r => setPageData(r.data))
    }, [])

    if (!pageData.volumeInfo) return null

    let bookCover = pageData.volumeInfo.imageLinks ? pageData.volumeInfo.imageLinks.thumbnail : ''

    let bookTitle = pageData.volumeInfo.title

    let allAuthors = pageData.volumeInfo.authors ? pageData.volumeInfo.authors.map(author => {
        return (<div className=''>{author}</div>)
    }
    ) : null

    let bookDescription = pageData.volumeInfo.description.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')

    let publishDate = new Date(pageData.volumeInfo.publishedDate).toDateString()
    // let publishYear = publishDate.getFullYear()

    let language = pageData.volumeInfo.language
    let pageCount = pageData.volumeInfo.pageCount

    return (
        <div className="mainContainer">
            <div className="sidebar">
                Sidebar
            </div>
            <div className="display">
                <div className="bookPageCard">
                    <div className="bookPageCardSide">
                        <img className='bookPageCardCover' src={bookCover} />
                    </div>
                    <div className="bookPageCardMain">
                        <div className="bookPageCardInformation">
                            <div>{bookTitle}</div>
                            {allAuthors}
                            <div>{bookDescription}</div>
                            <hr></hr>
                            <div>Published: {publishDate}</div>
                            <div>Pages: {pageCount}</div>
                            <div>Language: {language}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}