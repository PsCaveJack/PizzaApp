import { useState } from "react"
import './LoginPage.css'
import { signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from "../../firebase"

interface LoginCreds {
    username: string,
    password: string
}

const LoginPage: React.FC = () => {
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
    
      const handleLogin = () => {
        // Here you can implement your login logic using API calls or any authentication method
        console.log('Logging in with:', credentials);
        signInWithEmailAndPassword(auth, credentials.username, credentials.password)
        .then((userCredential) => {
          console.log(userCredential)
          // save user info
          const uid = userCredential.user.uid
          navigate('/?uid=${uid}')
        }).catch((error) => {
          console.log(error)
        })
      };

      const signUp = () => {
        navigate('/signup')
      }
    
      return (
        <div className="login-page">
          <div className="login-card">
            <h2>Login</h2>
            <h3>Demo Account: test1@test.com</h3>
              <h3> Password: testing</h3>
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
              <span
                onClick={signUp}
              >
                Sign Up Here
              </span>
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      );
}

export default LoginPage