import { createSlice } from '@reduxjs/toolkit';

type UserInfoType = {
    cookie: string,
    createTime: string | number,
    userId: string | number,
}

type BaseUserStoreType = {
    userInfo: UserInfoType
}

const baseUserStore: BaseUserStoreType = {
    // 用户数据
    userInfo: {
        cookie: '',
        createTime: '',
        userId: '',
    }
}

const userStore = createSlice({
    name: 'user',
    initialState: baseUserStore,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload;
        }
    }
})

// 结构出创建action对象函数 (actionCreater)
const { setUserInfo } = userStore.actions;
// 获取reducer函数
const userReducer = userStore.reducer;

// 修改数据的操作导出
export { setUserInfo };
export default userReducer;