import { useEffect } from "react";
import BookContainer from "../BookContainer/BookContainer";
import axios from 'axios';
import { useParams } from "react-router-dom";
import key from "../../apiKey"

export default function SearchPage({ searchResults, setSearchResults }) {
    let params = useParams()
    let searchTerm = params.searchTerm
    useEffect(() => {
        document.title='Search Results - ' + searchTerm
        let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&maxResults=40&printType=books&key=' + key
        axios.get(booksUrl)
            .then(r => {
                setSearchResults(r.data)
            })
    }, [searchTerm])

    if (!searchResults.items) return null

    return (
        <div>
            <BookContainer
                testData={searchResults}
            />
        </div>
    )
}