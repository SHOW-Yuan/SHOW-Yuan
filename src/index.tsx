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
                    components: {
                      // 主题变量
                      Input: {
                        activeBg: 'transparent',
                        activeBorderColor: '#d9d9d9',
                        hoverBg: 'transparent',
                        hoverBorderColor: '#d9d9d9',
                        activeShadow: '0 0 0 1px rgba(217, 217, 217, 1)'
                      }
                    }
                }}
            >
                <App />
            </ConfigProvider>
        </React.StrictMode>
    )
}