import React from 'React';
import { createRoot } from 'react-dom/client';

import './assets/scss/index.scss';
import App from './App';

const root = document.getElementById('root');
if(root) {
    createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}