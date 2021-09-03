import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/app/App.css';
import './components/about/about.css';
import './components/events/slider.css';
import './components/officers/officers.css';
import './components/social/social.css';

import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
