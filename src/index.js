import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';  // Keep App component for routing
import reportWebVitals from './reportWebVitals';
import { LanguageProvider } from './components/language'; // Import the provider


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider> {/* Wrap App with the provider */}
      <App />
    </LanguageProvider>
  </React.StrictMode>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
