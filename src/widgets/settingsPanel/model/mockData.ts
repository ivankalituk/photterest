export interface SettingsLinksType {
    name: string,
    id: string,
    href: string,
    icon: boolean
}

export const settingsLinksData: SettingsLinksType[] = [
    {
        name: 'Настройки',
        id: 'SETTINGS',
        href: '/',
        icon: false
    },
    {
        name: 'Настройки рекомендаций',
        id: 'SETTINGS RECO',
        href: '/',
        icon: false
    },
    {
        name: 'Центр жалоб',
        id: 'SETTINGS REPORTS',
        href: '/',
        icon: false
    },
    {
        name: 'Условия пользования',
        id: 'SETTINGS TERMS',
        href: '/',
        icon: true
    },
    {
        name: 'Политика конфиденциальности',
        id: 'SETTINGS CONFIDENT',
        href: '/',
        icon: true
    },
    {
        name: 'Ваши права',
        id: 'SETTINGS RIGHTS',
        href: '/',
        icon: true
    },
]