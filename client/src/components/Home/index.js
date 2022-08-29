import axios from 'axios'
import { useState } from 'react';
import Auth from '../Auth';
import HomeShelfContainer from "../HomeShelfContainer";

export default function Home({ user, setUser, userShelves,setUserShelves, setBookClubs }) {
    document.title = 'Scholar'
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