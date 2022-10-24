import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 渲染App组件到root容器中
root.render(
  // React.StrictMode是用来检查react的比较过时的代码的
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
