import { useState } from "react"
import './SignUpPage.css'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth, db } from "../../firebase"
import { setDoc, collection, doc } from "firebase/firestore"

interface LoginCreds {
    username: string,
    password: string
}

const SignUpPage: React.FC = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState<LoginCreds>({
        username: '',
        password: '',
      });
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setCredentials((prevCredentials) => ({
          ...prevCredentials,
          [name]: value,
        }));
      };
    
      const handleSignUp =  () => {
        // Here you can implement your login logic using API calls or any authentication method
        console.log('Logging in with:', credentials);
        createUserWithEmailAndPassword(auth, credentials.username, credentials.password)
        .then(async (userCredential) => {
          
          const ref = doc(db, 'users', userCredential.user.uid)
          
          // default data for customer
          const customerData = {
            customer: true
          }
          try {
            await setDoc(ref, customerData)
          }
          catch (e){
              console.log(e)
              console.log('did not document')
          }
          console.log(userCredential)
          navigate('/')
        }).catch((error) => {
          console.log(error)
        })
      };

      
    
      return (
        <div className="login-page">
          <div className="login-card">
            <h2>Sign Up</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                />
              </div>
              <button type="button" onClick={handleSignUp}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      );
}

export default SignUpPage