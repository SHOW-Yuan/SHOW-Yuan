import { configureStore } from '@reduxjs/toolkit';

// 子模块
import userStore from './modules/user';

const store = configureStore({
    reducer: {
        user: userStore
    }
})

export default store;