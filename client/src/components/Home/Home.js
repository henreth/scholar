import BookContainer from "../BookContainer/BookContainer";
import axios from 'axios'

export default function Home({ user, setUser, userShelves }) {
    document.title = 'Untitled Book App'

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
            <div>
                <h1>{shelf.name}:</h1>
                <BookContainer
                    books={shelf.books}
                />
            </div>
        )
    })

    return (
        <div>
            {bookShelvesToDisplay}
        </div>
    )
}