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
    axios.get(booksUrl)
      .then(r => setTestData(r.data))
    axios.get('/me')
      .then(r => setUser(r.data))
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
            testData={testData}
            user={user}
          />} />
        <Route path='/book/:id' element={
          <BookPage
            setUser={setUser}
          />} />
        <Route path='/search/:searchTerm' element={
          <SearchPage
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />} />
      </Routes>
    </div>
  );
}