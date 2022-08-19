import key from '../../apiKey';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';
import Header from '../Header/Header';
import BookPage from '../BookPage/BookPage';
import SearchPage from '../SearchPage/SearchPage';

export default function App() {
  let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=camus&maxResults=30&printType=books&key=' + key
  let [testData, setTestData] = useState([])
  let [user, setUser] = useState({})
  let [searchResults, setSearchResults] = useState({})

  useEffect(() => {
    let meReq = axios.get('/me')
    axios.all([meReq])
      .then(axios.spread((res1) => {
        setUser(res1.data)
        console.log(res1.data)
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
          />} />
        <Route path='/book/:id' element={
          <BookPage
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