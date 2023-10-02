import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/home/home'
import LoginPage from "./pages/loginPage/loginPage"
import CreateAccount from "./pages/createAccount/createAccount"

function App() {

  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/create/account" element={<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App
