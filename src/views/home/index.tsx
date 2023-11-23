import React, { FC } from 'react';
import './index.scss';

// components
import HeaderTitle from '../headerTitle';
import MainContent from '../mainContent';
import FooterSong from '../footerSong';

const Home: FC = () => {
    return (
        <div className='music-box'>
            <HeaderTitle></HeaderTitle>
            <MainContent></MainContent>
            <FooterSong></FooterSong>
        </div>
    )
}

export default Home;