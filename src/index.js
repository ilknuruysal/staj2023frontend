import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import './bootstrap-override.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpPage from './pages/SignUpPage';
// import MainPage from './MainPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignUpPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
