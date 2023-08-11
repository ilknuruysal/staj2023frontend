//Sign Up Sign In Page
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./bootstrap-override.scss";
import App from "./App";
import UserSignupPage from "./pages/UserSignupPage";
import LoginPage from "./pages/LoginPage";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
import LanguageSelector from "./components/LanguageSelector";
// import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(
//   <div>
//     <UserSignupPage />
//     <LanguageSelector />
//   </div>,
//   document.getElementById("root")
// );

// serviceWorker.unregister();

//The product page

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
