import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/home/home'
import LoginPage from "./pages/loginPage/loginPage"

function App() {

  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App
