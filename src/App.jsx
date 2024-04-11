import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './Util/Headers'

function App() {
  return (
    <div>
      <Headers/>
    <Outlet/>
    </div>
  )
}

export default App
