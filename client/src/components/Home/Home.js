import BookContainer from "../BookContainer/BookContainer";
import axios from 'axios'

export default function Home({ user, setUser, userShelves }) {
    document.title = 'Scholar'

    const handleLogIn = () => {
        axios.post('/login', {
            "username": "demouser",
            "password": "12345"
        })
            .then(r => setUser(r.data))

    }

    const handleShowMe = () => {
        axios.get('/me')
            .then(r => console.log(r.data))
    }

    if (!user.username) return (
        <>
            <button onClick={handleLogIn}>Log In</button>
        </>
    )


    let bookShelvesToDisplay = userShelves.sort((a, b) => a.id - b.id).map(shelf => {
        return (
            <div className="homeshelfcontainer">
                <h1>{shelf.name}:</h1>
                <div className="homeshelfrow"> 
                <BookContainer
                    books={shelf.books}
                    />
                    </div>
            </div>
        )
    })

    return (
        <div className="homeContainer">
            {bookShelvesToDisplay}
        </div>
    )
}