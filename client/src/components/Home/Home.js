import BookContainer from "../BookContainer/BookContainer";
import axios from 'axios'

export default function Home({ user, setUser, userShelves }) {
    document.title = 'Untitled Book App'

    const handleLogIn = () => {
        axios.post('/login', {
            "username": "test",
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
            <button onClick={handleShowMe}>Show Me</button>
        </>
    )


    function handleLogOut() {
        axios.delete('/logout')
            .then(r => setUser({}))
    }

    let currentlyReadingBooks = userShelves[1].books

    let bookShelvesToDisplay = userShelves.map(shelf => {
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
            {/* <h1>Currently Reading:</h1>
            <BookContainer
                books={currentlyReadingBooks}
            /> */}
            {bookShelvesToDisplay}
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}