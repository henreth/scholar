import axios from 'axios'
import { useState } from 'react';
import Auth from '../Auth';
import HomeShelfContainer from "../HomeShelfContainer";

export default function Home({ user, setUser, userShelves, setUserShelves, userBookClubs, setUserBookClubs }) {
    document.title = 'Scholar'
    if (!user.username) return (
        <>
            <Auth
                setUser={setUser}
                setUserShelves={setUserShelves}
                setUserBookClubs={setUserBookClubs}
            />
        </>
    )


    let bookShelvesToDisplay = userShelves.sort((a, b) => a.id - b.id).map((shelf,idx) => {
        return (
            <HomeShelfContainer shelf={shelf} type='shelf' userShelves={userShelves} setUserShelves={setUserShelves} idx={idx}/>
        )
    })

    let bookClubsToDisplay = userBookClubs.sort((a, b) => a.id - b.id).map((club,idx) => {
        return (
            <HomeShelfContainer shelf={club.bookclub} type='club' userShelves={userShelves} setUserShelves={setUserShelves} idx={idx}/>
        )
    })

    return (
        <div className="homeContainer">
            <h1>Your Shelves: </h1>
            {bookShelvesToDisplay}
            <h1>Your Book Clubs: </h1>
            {bookClubsToDisplay}
        </div>
    )
}