import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemSelector from "@ItemSelector/ItemSelector"

import './App.scss'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ItemSelector />} />
    </Routes>
  </BrowserRouter>
)


export default App
