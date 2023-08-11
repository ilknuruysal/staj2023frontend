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

// Sign Up Page' e girmek için div içindeki ilk element UserSignupPage yapılmalı
// Login' e girmek için div içindeki ilk element LoginPage yapılmalı
// Product sayfası görüntülenen alt kısımdaki kod comment içine alınır.

// ReactDOM.render(
//   <div>
// Suan Sign Up Page görüntülenir.
//     <UserSignupPage />
//     <LanguageSelector />
//   </div>,
//   document.getElementById("root")
// );

// serviceWorker.unregister();

//The product page

//Product Sayfası görüntülenir
//Sign Up veya Login'e girmek için burayı comment'leyip üst kısmın commentlerini kaldırın.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
