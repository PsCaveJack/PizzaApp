import { signOut } from "firebase/auth"
import { auth } from "../firebase"

function HomePage() {

    const logOut = () => {
        signOut(auth)
    }

    return (
        <div>
            <p>hi</p>
            <button onClick={logOut}>Log Out</button>
        </div>
    )
  }

export default HomePage