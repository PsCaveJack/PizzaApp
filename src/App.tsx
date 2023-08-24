import './App.css'
import LoginPage from './login/LoginPage'
import HomePage from './components/HomePage'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export const Firebase = initializeApp(firebaseConfig)

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path = '/' element ={<HomePage/>}/>
          <Route path = '/login' element ={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
        
      
  )
}

export default App
