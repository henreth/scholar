import { useEffect, useState } from "react";
import BookContainer from "../BookContainer/BookContainer";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import key from "../../apiKey"

export default function SearchPage({ searchResults, setSearchResults }) {
    let params = useParams()
    console.log("params", params)
    let searchTerm = params.searchTerm
    let authorSearchTerm = params.authorSearch

    let [search, setSearch] = useState(searchTerm)
    const handleSearchChange = (e) => setSearch(e.target.value)

    let navigate = useNavigate()
    let [authorDisplay, setAuthorDisplay] = useState(false)
    let [authorSearch, setAuthorSearch] = useState('')
    const handleAuthorSearchChange = (e) => setAuthorSearch(e.target.value)

    let [genreDisplay, setGenreDisplay] = useState(false)
    let [genreSearch, setGenreSearch] = useState('')
    const handleGenreSearchChange = (e) => setGenreSearch(e.target.value)


    useEffect(() => {
        document.title = 'Search Results - ' + searchTerm + (authorDisplay && authorSearch ? ' - '+authorSearch : '')
        let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&maxResults=40&printType=books&key=' + key
        axios.get(booksUrl)
            .then(r => {
                setSearchResults(r.data)
            })
    }, [searchTerm,authorSearchTerm])

    if (!searchResults.items) return null

    function handleClickAuthorToggle() {
        setAuthorDisplay(!authorDisplay)
        // setAuthorSearch('')
    }

    function handleClickGenreToggle() {
        setGenreDisplay(!genreDisplay)
        // setGenreSearch('')
    }

    let displayAuthorSearchText = authorDisplay ? <input
        type='text'
        value={authorSearch}
        onChange={handleAuthorSearchChange} /> : null;


    let displayGenreSearchText = genreDisplay ? <input
        type='text'
        value={genreSearch}
        onChange={handleGenreSearchChange} /> : null;

    function handleBigSearchSubmit(e) {
        e.preventDefault()
        let authorSearchText = authorDisplay && authorSearch ? '+inauthor:' + authorSearch : ''
        let genreSearchText = genreDisplay && genreSearch ? '+insubject:' + genreSearch : ''
        let searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + search + authorSearchText + genreSearchText + '&maxResults=40&printType=books&key=' + key
        console.log("searchUrl", searchUrl)
        axios.get(searchUrl)
            .then(r => {
                if (r.data.items) {
                    // navigate('/')
                    navigate('/search/' + search+'/'+authorSearch)
                    setSearchResults(r.data)
                } else {
                    alert('No results found!')
                }
            })
    }

    return (
        <div>
            <div className="bigSearchCard">
                <div className="searchRow">
                    <h2>Search: </h2>
                    <form onSubmit={handleBigSearchSubmit}>
                        <input
                            type='text'
                            className="bigSearch"
                            value={search}
                            onChange={handleSearchChange}
                            onSubmit={e => e.preventDefault()}
                        />
                        {/* <button>Submit</button> */}
                    </form>
                </div>
                <div className="filterRow">
                    <h4>Filters: </h4>
                    <input
                        type='radio'
                        checked={authorDisplay}
                        onClick={handleClickAuthorToggle}
                    />
                    <div>Author: </div>
                    {displayAuthorSearchText}
                    <input
                        type='radio'
                        checked={genreDisplay}
                        onClick={handleClickGenreToggle}
                    />
                    <div>Genre: </div>
                    {displayGenreSearchText}
                </div>
            </div>
            <BookContainer
                books={searchResults}
            />
        </div>
    )
}