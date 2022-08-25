import axios from 'axios'
import { useState } from 'react';
import HomeShelfContainer from "../HomeShelfContainer/HomeShelfContainer";

export default function Home({ user, setUser, userShelves }) {
    document.title = 'Scholar'

    const handleLogIn = () => {
        axios.post('/login', {
            "username": "demouser",
            "password": "12345"
        })
            .then(r => setUser(r.data))

    }

    if (!user.username) return (
        <>
            <button onClick={handleLogIn}>Log In</button>
        </>
    )

    let bookShelvesToDisplay = userShelves.sort((a, b) => a.id - b.id).map(shelf => {
        return (
            <HomeShelfContainer shelf={shelf}/>
        )
    })

    return (
        <div className="homeContainer">
            {bookShelvesToDisplay}
        </div>
    )
}