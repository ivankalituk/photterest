export interface BottomBarItemType {
    name: string;
    id: 'HOME' | 'SEARCH' | 'MESSAGES' | 'PROFILE';
    link: string;
}

export const bottomBarData: BottomBarItemType[] = [
    {
        name: 'Home',
        id: 'HOME',
        link: '/'
    },
    {
        name: 'Search',
        id: 'SEARCH',
        link: '/search'
    },
    {
        name: 'Messages',
        id: 'MESSAGES',
        link: '/messages'
    },
    {
        name: 'Profile',
        id: 'PROFILE',
        link: '/profile'
    },
];