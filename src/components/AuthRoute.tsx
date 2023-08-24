import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { auth } from "../firebase";

export interface IAuthRouteProps {
    children:React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        AuthCheck()
    }, [auth])

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if(user){
            setLoading(false)
        }
        else{
            console.log('unauthorized')
            navigate('/login')
        }
    })

    return <div></div>
}

export default AuthRoute