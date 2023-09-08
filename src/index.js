// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import "./bootstrap-override.scss";
// import App from "./App";
// import UserSignupPage from "./pages/UserSignupPage";
// import LoginPage from "./pages/LoginPage";
// import Main from "./pages/Main"; // Import the Main component
// import * as serviceWorker from "./serviceWorker";
// import "./i18n";
// import LanguageSelector from "./components/LanguageSelector";
// import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
// class AppContainer extends React.Component {
//   state = {
//     isLoggedIn: false,
//   };

//   componentDidMount() {
//     const authToken = localStorage.getItem("authToken");
//     if (authToken) {
//       this.setState({ isLoggedIn: true });
//     }
//   }

//   handleLoginSuccess = () => {
//     this.setState({ isLoggedIn: true });
//   };

//   handleLogout = () => {
//     localStorage.removeItem("authToken");
//     this.setState({ isLoggedIn: false });
//   };

//   render() {
//     const { isLoggedIn } = this.state;
//     return (
//       <div>
//         {isLoggedIn ? (
//           <>
//             <Main />
//             <button onClick={this.handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <LoginPage onLoginSuccess={this.handleLoginSuccess} />
//             <UserSignupPage />
//           </>
//         )}
//         <LanguageSelector />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<AppContainer />, document.getElementById("root"));
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import "./bootstrap-override.scss";
import Application from "./Application"; // Import the Application component
import * as serviceWorker from "./serviceWorker";
// import "./i18n";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

// ReactDOM.render(<Application />, document.getElementById("root"));
// serviceWorker.unregister();

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<Application />);
