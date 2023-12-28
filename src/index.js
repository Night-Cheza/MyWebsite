import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />        
    </Router>
);