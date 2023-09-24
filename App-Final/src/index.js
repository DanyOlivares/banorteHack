import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import P1ContextProvider from './context1';
import P2ContextProvider from './context2';
import P3ContextProvider from './context3';
import P4ContextProvider from './context4';
import P5ContextProvider from './context5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <P5ContextProvider>
       <P4ContextProvider>
        <P2ContextProvider>
          <P3ContextProvider>
            <P1ContextProvider>
             <App />
            </P1ContextProvider>
          </P3ContextProvider>
        </P2ContextProvider>
       </P4ContextProvider>
       </P5ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
