import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import key from '../../apiKey'
import FeaturedBook from "../FeaturedBook/FeaturedBook"

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

    return (
        <div className="mainContainer">
            <div className="sidebar">
                Sidebar
            </div>
            <div className="display">
               <FeaturedBook 
                book={pageData}
               />
            </div>
        </div>
    )
}