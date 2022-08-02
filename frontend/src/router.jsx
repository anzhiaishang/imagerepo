import React from "react";
import { Routes,Route} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import FileUpload from './pages/FileUpload/FileUpload'
import Gachya from "./pages/gachya/gachya";

function AppRouter() {
  return(
    <Routes>
      <Route path='/' element={<MainPage/>}>
      <Route path="/upload" element={<FileUpload/>}></Route>
      <Route path="/gachya" element={<Gachya/>}></Route>
      </Route>
      
    </Routes>
  )
}

export default AppRouter