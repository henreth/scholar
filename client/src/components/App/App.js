import key from '../../apiKey';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home';
import Header from '../Header';
import BookPage from '../BookPage';
import SearchPage from '../SearchPage';
import Profile from '../Profile';
import Community from '../Community';

export default function App() {
  let [user, setUser] = useState({})
  let [userShelves,setUserShelves] = useState([])
  let [searchResults, setSearchResults] = useState({})
  let [bookClubs,setBookClubs] = useState([])

  useEffect(() => {
    let meReq = axios.get('/me')
    let shelvesReq = axios.get('/usershelves')
    let bookClubsReq = axios.get('/bookclubs')
    axios.all([meReq,shelvesReq,bookClubsReq])
      .then(axios.spread((res1,res2,res3) => {
        setUser(res1.data)
        setUserShelves(res2.data)
        setBookClubs(res3.data)
      }))
  }, [])

  return (
    <div>
      <Header
        user={user}
        setUser={setUser}
        setUserShelves={setUserShelves}
      />
      <hr></hr>
      <Routes>
        <Route path='/*' element={
          <Home
            user={user}
            setUser={setUser}
            userShelves={userShelves}
            setUserShelves={setUserShelves}
          />} />
        <Route path='/profile/:username' element={
          <Profile
            user={user}
            setUser={setUser}
          />} />
        <Route path='/book/:id' element={
          <BookPage
            user={user}
            setUser={setUser}
            userShelves={userShelves}
            setUserShelves={setUserShelves}
          />} />
        <Route path='/community' element={
          <Community
            user={user}
            setUser={setUser}
          />} />
        <Route path='/search/:searchTerm' element={
          <SearchPage
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />} />
        <Route path='/search/:searchTerm/:authorSearch' element={
          <SearchPage
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />} />
      </Routes>
    </div>
  );
}