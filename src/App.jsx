import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail'
import Meal from './components/Meal'
import Navbar from './components/Navbar'
import Search from './components/Search'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Meal />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/search/:name' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
