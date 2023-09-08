// import React, { Component } from 'react';
// import Input from '../components/Input';
// import { withTranslation } from 'react-i18next';
// import { login } from '../api/apiCalls';

// class LoginPage extends Component {
//   state = {
//     username: null,
//     password: null
//   };

//   onChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   onClickLogin = event => {
//     event.preventDefault();
//     const { username, password } = this.state;
//     const creds = {
//       username,
//       password
//     };
//     login(creds);
//   };

//   render() {
//     const { t } = this.props;
//     return (
//       <div className="container">
//         <form>
//           <h1 className="text-center">{t('Login')}</h1>
//           <Input label={t('Username')} name="username" onChange={this.onChange} />
//           <Input label={t('Password')} name="password" type="password" onChange={this.onChange} />
//           <div className="text-center">
//             <button className="btn btn-primary" onClick={this.onClickLogin}>
//               {t('Login')}
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default withTranslation()(LoginPage);
import React, { useState } from "react";
import Input from "../components/Input";
import { login } from "../api/apiCalls";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onClickLogin = async (event) => {
    event.preventDefault();
    const creds = {
      username,
      password,
    };

    try {
      const response = await login(creds);
      const token = response.data.token;
      localStorage.setItem("authToken", token);

      // Redirect to Main.js on successful login
      if (username === "admin") {
        navigate("/main");
      } else {
        navigate("/mainPage");
      }
    } catch (error) {
      // Handle login error
    }
  };

  return (
    <div className="container">
      <form>
        <h1 className="text-center">Login</h1>
        <Input label="Username" name="username" onChange={onChange} />
        <Input
          label="Password"
          name="password"
          type="password"
          onChange={onChange}
        />
        <div className="text-center">
          <button className="btn btn-primary" onClick={onClickLogin}>
            Login
          </button>
        </div>
      </form>
      <div className="mt-2 text-center">
        {/* Use Link to navigate back to WelcomePage */}
        <Link to="/" className="btn btn-secondary">
          Back to Welcome Page
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
