import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useLocation } from "react-router-dom"

function HomePage() {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const uid = queryParams.get('uid')
    console.log(uid)

    const logOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <p>hi</p>
            {uid && <h1>User ID: {uid}</h1>}
            <button onClick={logOut}>Log Out</button>
        </div>
    )
  }

export default HomePage