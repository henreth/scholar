import key from '../../apiKey';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';
import Header from '../Header/Header';
import BookPage from '../BookPage/BookPage';
import SearchPage from '../SearchPage/SearchPage';

export default function App() {
  let [user, setUser] = useState({})
  let [userShelves,setUserShelves] = useState([])
  let [searchResults, setSearchResults] = useState({})

  useEffect(() => {
    let meReq = axios.get('/me')
    let shelvesReq = axios.get('/usershelves')
    axios.all([meReq,shelvesReq])
      .then(axios.spread((res1,res2) => {
        setUser(res1.data)
        // console.log(res1.data)
        setUserShelves(res2.data)
        console.log(res2)
      }))
  }, [])

  return (
    <div>
      <Header
        setSearchResults={setSearchResults}
      />
      <hr></hr>
      <Routes>
        <Route path='/*' element={
          <Home
            user={user}
            setUser={setUser}
            userShelves={userShelves}
          />} />
        <Route path='/book/:id' element={
          <BookPage
            user={user}
            setUser={setUser}
            userShelves={userShelves}
            setUserShelves={setUserShelves}
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