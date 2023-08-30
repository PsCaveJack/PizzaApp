import { getAuth, onAuthStateChanged } from "firebase/auth"
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { auth, db } from "../firebase";
import { doc } from "firebase/firestore";

export interface IAuthRouteProps {
    children:React.ReactNode;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const { children } = props
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if(user){
                setLoading(false)
                console.log('authorized')

                // get user info from database
                const userDocRef = doc(db, 'users', user.uid)

                // navigate to homepage
                navigate('/')
                
            }
            else{
                console.log('unauthorized')
                navigate('/login')
            }
        })
        
        return () => AuthCheck()
    }, [auth])

    

    if (loading) return <p>loading...</p>

    return <>{children}</>
}

export default AuthRoute