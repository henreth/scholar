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

    function capitalize(str){
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }

    let categories = pageData.volumeInfo.categories.join(' / ').split(' / ').map(cat=>capitalize(cat))
    let allCategories = categories.filter((cat,idx)=>categories.indexOf(cat) == idx).join(' / ')

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
            </div>
        </div>
    )
}