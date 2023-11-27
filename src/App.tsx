import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.scss';

// components
import Home from './views/home';
import Login from './views/login';

const App: React.FC = () => {
    return (
        <div className='music-content'>
            <div className='music-content-box'>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;