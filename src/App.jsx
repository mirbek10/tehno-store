import React from 'react'
import { myRouter } from './router'
import './App.css'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <div className='wraper'>
     <RouterProvider router={myRouter} />
    </div>
  )
}

export default App
