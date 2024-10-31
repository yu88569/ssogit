// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline } from '@mui/material';
import App from './App';
import store from './store';

// Render แอปพลิเคชันหลัก
ReactDOM.render(
  <Provider store={store}>           {/* เชื่อมต่อ Redux store */}
    <Router>                          {/* ตั้งค่า Router */}
      <CssBaseline />                 {/* Material UI สำหรับรีเซ็ตสไตล์ */}
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
