

import './App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemSelector from "./Components/ItemSelector/ItemSelector"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemSelector />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
