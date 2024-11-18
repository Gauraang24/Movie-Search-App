import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<Home />} />
            {/* <Route path="/starred" element={<StarredMovies />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
