import './App.css'
import LoginPage from './login/LoginPage'
import HomePage from './components/HomePage'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthRoute from './components/AuthRoute.tsx'


export const Firebase = initializeApp(firebaseConfig)

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path = '/' 
            element ={
                <AuthRoute>
                  <HomePage/>
                </AuthRoute>}
          />
          <Route path = '/login' element ={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
