import { useState } from "react"
import key from "../../apiKey"
import axios from 'axios';

export default function Header({setTestData}) {
    let [searchTerm, setSearchTerm] = useState('')
    const handleSearchChange = (e) => setSearchTerm(e.target.value)

    let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm + '&printType=books&key=' + key

    function handleSearchSubmit(e) {
        e.preventDefault()
        axios.get(booksUrl)
            .then(r => {
                if (r.data.items[0]){
                    setTestData(r.data)
                }
            
            })
    }



    return (
        <div className='header'>
            <div>Clubs</div>
            <div className="headerTitle">Untitled Book App</div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type='text'
                    value={searchTerm}
                    placeholder='Search...'
                    className="searchBar"
                    onChange={handleSearchChange}
                />
            </form>
        </div>
    )
}