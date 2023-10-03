import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './pages/home/home'
import LoginPage from "./pages/loginPage/loginPage"
import CreateAccount from "./pages/createAccount/createAccount"
import Config from "./components/main/configuracion/configuracion"

function App() {

  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}>
            <Route path="config" element={<Config/>} />
          </Route>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/create/account" element={<CreateAccount/>}/>
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App
