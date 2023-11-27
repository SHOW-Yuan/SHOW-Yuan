import React, { useEffect } from 'react';
import './index.scss';

// components
import HeaderTitle from '../headerTitle';
import MainContent from '../mainContent';
import FooterSong from '../footerSong';
// hooks
import { useFetchUserInfo, useFetchUserSubcount } from './hooks/useFetch';

const Home: React.FC = () => {
    const { getToken, contextHolder } = useFetchUserInfo();
    const { fetchUserSubcount } = useFetchUserSubcount();

    useEffect(() => {
        const init = async () => {
            await getToken();
            await fetchUserSubcount();
        }

        init();
    },[])

    return (
        <div className='music-box'>
            {contextHolder}
            <HeaderTitle></HeaderTitle>
            <MainContent></MainContent>
            <FooterSong></FooterSong>
        </div>
    )
}

export default Home;