import key from '../../apiKey';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home';

export default function App() {
  let booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=camus&printType=books&key=' + key
  let [testData, setTestData] = useState([])
  useEffect(  () => {
    axios.get(booksUrl)
      .then(r => setTestData(r.data))
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/*' element ={
          <Home 
            testData={testData}
          />
        }
        />
      </Routes>
    </div>
  );
}