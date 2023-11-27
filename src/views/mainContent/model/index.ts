import { DiscoverItemType } from '@/types/home';

type MainItemType = DiscoverItemType & {
    icon: string;
    rightIcon?: string;
}

type MainInfoType = {
    title?: string; // 标题
    isAdd: boolean; // 是否可操作
    list: MainItemType[]
}

type MainListType = MainInfoType[];

// 发现主题内容
export const homeDiscoverList: MainItemType[] = [
    {
        label: '发现音乐',
        value: '发现音乐',
        icon: 'icon-wy'
    },
    {
        label: '私人FM',
        value: '私人FM',
        icon: 'icon-radioguangbo'
    },
    {
        label: '视频',
        value: '视频',
        icon: 'icon-shipin'
    },
    {
        label: '朋友',
        value: '朋友',
        icon: 'icon-friend'
    }
];

// 我的音乐
export const myMusicList: MainItemType[] = [
    {
        label: 'iTunes音乐',
        value: 'iTunes音乐',
        icon: 'icon-shengyin'
    },
    {
        label: '下载管理',
        value: '下载管理',
        icon: 'icon-xiazai'
    },
    {
        label: '最近播放',
        value: '最近播放',
        icon: 'icon-dingshirenwulishijilu'
    }
];

// 创建的歌单
export const playlistCreated: MainItemType[] = [
    {
        label: '我喜欢的音乐',
        value: 'iTunes音乐',
        icon: 'icon-xihuan',
        rightIcon: 'icon-huaban'
    }
];

export const mainListAll: MainListType = [
    {
        isAdd: false,
        list: homeDiscoverList
    },
    {
        isAdd: false,
        title: '我的音乐',
        list: myMusicList
    },
    {
        isAdd: true,
        title: '创建的歌单',
        list: playlistCreated
    }
];