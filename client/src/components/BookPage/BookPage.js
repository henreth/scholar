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
    let bookSubtitle = pageData.volumeInfo.subtitle

    let allAuthors = pageData.volumeInfo.authors ? pageData.volumeInfo.authors.join(', ') : null

    let bookDescription = pageData.volumeInfo.description.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, '')

    let publishDate = new Date(pageData.volumeInfo.publishedDate).toDateString()
    // let publishYear = publishDate.getFullYear()

    let language = pageData.volumeInfo.language
    let pageCount = pageData.volumeInfo.pageCount

    let allCategories = pageData.volumeInfo.categories.join(' / ')

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
                            <div>{bookSubtitle}</div>
                            {allAuthors}
                            <hr></hr>
                            <div>{bookDescription}</div>
                            <hr></hr>
                            <div>Published: {publishDate}</div>
                            <div>Pages: {pageCount}</div>
                            <div>Language: {language}</div>
                            <div>Categories: {allCategories}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}