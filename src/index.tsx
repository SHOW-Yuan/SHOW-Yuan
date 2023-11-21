import React from 'React';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';

import '@/assets/scss/index.scss';
import '@/assets/icon/iconfont.css';

import App from './App';

const root = document.getElementById('root');
if(root) {
    createRoot(root).render(
        <React.StrictMode>
            <ConfigProvider
                theme={{
                    token: {
                      colorPrimary: '#ff3a3a',
                    },
                }}
            >
                <App />
            </ConfigProvider>
        </React.StrictMode>
    )
}