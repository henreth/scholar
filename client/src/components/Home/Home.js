import axios from 'axios'
import { useState } from 'react';
import Auth from '../Auth/Auth';
import HomeShelfContainer from "../HomeShelfContainer/HomeShelfContainer";

export default function Home({ user, setUser, userShelves,setUserShelves, setBookClubs }) {
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
            <Auth setUser={setUser} setUserShelves={setUserShelves} setBookClubs={setBookClubs}/>
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