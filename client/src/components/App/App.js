import key from '../../apiKey';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';
import Header from '../Header/Header';
import BookPage from '../BookPage/BookPage';

export default function App() {
  let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=camus&maxResults=30&printType=books&key=' + key
  let [testData, setTestData] = useState([])
  useEffect(() => {
    axios.get(booksUrl)
      .then(r => setTestData(r.data))
  }, [])

  return (
    <div>
      <Header
        setTestData={setTestData}
      />
      <hr></hr>
      <Routes>
        <Route path='/*' element={
          <Home
            testData={testData}
          />} />
        <Route path='/book/:id' element={
          <BookPage
          />} />
      </Routes>
    </div>
  );
}