import { useState } from 'react';
// api
import { getBanner, getPersonalized } from '@/api/mainApi';
// model
import MsgModel from '@/model/MsgModel';
import { message } from 'antd';
import Log from '@/utils/log';
// store
import { setUserInfo } from '@/store/modules/user';

// 获取banner轮播图数据
function useFetchBanner() {
    const [loading, setLoading] = useState(false);
    const [banner, setBanner] = useState<any>([]);

    const fetchBanner = async () => {
        try {
            setLoading(true);
            const res = await getBanner();
            setLoading(false);

            if(MsgModel.isSuccess(res)) {
                
            }
        }catch(e) {
            Log.error(e, fetchBanner.name);
        }
    };

    return {
        loading,
        banner,
        fetchBanner
    }
}

export {
    useFetchBanner,
}