import { useState } from "react"
import key from "../../apiKey"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Header({setTestData}) {
    let [searchTerm, setSearchTerm] = useState('')
    const handleSearchChange = (e) => setSearchTerm(e.target.value)
    let navigate = useNavigate()

    let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&maxResults=40&printType=books&key=' + key

    function handleSearchSubmit(e) {
        document.title='Search Results - ' + searchTerm
        e.preventDefault()
        axios.get(booksUrl)
            .then(r => {
                if (r.data.items[0]){
                    setTestData(r.data)
                }
            
            })
    }

    function handleHeaderClick(){
        navigate('/')
    }

    return (
        <div className='header'>
            <div>Clubs</div>
            <div className="headerTitle" onClick={handleHeaderClick}>Untitled Book App</div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type='text'
                    value={searchTerm}
                    placeholder='...Search'
                    className="searchBar"
                    onChange={handleSearchChange}
                />
            </form>
        </div>
    )
}