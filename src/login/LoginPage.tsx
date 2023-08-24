import { useState } from "react"
import './LoginPage.css'

interface LoginCreds {
    username: string,
    password: string
}

const LoginPage: React.FC = () => {
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
      };
    
      return (
        <div className="login-page">
          <div className="login-card">
            <h2>Login</h2>
            <h3>Demo Account: test1@test.com</h3>
              <h3> Password: testing</h3>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
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
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
          </div>
        </div>
      );
}

export default LoginPage