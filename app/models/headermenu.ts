export const menuItems: Array<any> = [
    {
        hasItems: false,
        name: 'Fixed Values',
        link: '/fixedValues'
    },
    {
        hasItems: false,
        name: 'Reports',
        link: '/xtrareports'
    },
    {
        hasItems: true,
        name: 'Logins',
        id: 'loginDrop',
        items: [
            {
                name: 'OEM',
                link: '/buyersLogin'
            },
            {
                name: 'Delaer',
                link: '/dealerLogin'
            },
            {
                name: 'CLient',
                link: '/clientLogin'
            }
        ]
    },
    {
        hasItems: true,
        name: 'Manage Forms',
        id: 'formDrop',
        items: [
            {
                name: 'Modules',
                link: '/formModules'
            },
            {
                name: 'Columns',
                link: '/formColumns'
            }
        ]
    }
]