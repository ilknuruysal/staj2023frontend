import React from "react";
import WelcomePage from "./pages/WelcomePage";
import UserSignUpPage from "./pages/UserSignupPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./MainPage";
import Order from "./components/Order";
import { Provider } from "react-redux";
import { store } from "./store";
import Main from "./pages/Main"; // Update the import for Main.js
import { HashRouter, Route, Routes } from "react-router-dom";

function Application() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/mainPage"
            element={
              <Provider store={store}>
                <MainPage />
              </Provider>
            }
          />
          <Route path="/order" element={<Order />} />
          <Route path="/signup" element={<UserSignUpPage />} />
          <Route path="/main" element={<Main />} />{" "}
          {/* Use /main for Main.js */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Application;

// import React, { Component } from "react";
// import WelcomePage from "./pages/WelcomePage";
// import LoginPage from "./pages/LoginPage";
// import MainPage from "./pages/MainPage";
// import {
//   HashRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// // Import Switch and Redirect

// class Application extends Component {
//   state = {
//     isLoggedIn: false,
//   };

//   handleLoginSuccess = () => {
//     this.setState({ isLoggedIn: true });
//   };

//   render() {
//     const { isLoggedIn } = this.state;

//     return (
//       <div>
//         <Router>
//           <Routes>
//             <Route exact path="/" component={WelcomePage} />
//             <Route path="/login">
//               {isLoggedIn ? (
//                 <Navigate to="/mainpage" />
//               ) : (
//                 <LoginPage onLoginSuccess={this.handleLoginSuccess} />
//               )}
//             </Route>
//             <Route path="/mainpage">
//               {isLoggedIn ? <MainPage /> : <Navigate to="/login" />}
//             </Route>
//             <Navigate to="/" />
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }

// export default Application;
