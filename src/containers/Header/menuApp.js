export const adminMenu = [
    { //1. User Management Tab
        name: 'menu.admin.user-manage',
        menus: [
            {name: 'menu.admin.crud', link: '/system/user-manage' },
            {name: 'menu.admin.crud-redux', link: '/system/user-redux' },
            {name: 'menu.admin.doctor-manage', link: '/system/doctor-manage' },
            {name: 'menu.admin.admin-manage', link: '/system/admin-manage' },
        ]
    },
    { //2. Medical Centre Management Tab
        name: 'menu.admin.centre',
        menus: [
            {name: 'menu.admin.centre-manage', link: '/system/medical-centre-manage' },
        ]
    },
    { //2. Speciality Management Tab
        name: 'menu.admin.speciality',
        menus: [
            {name: 'menu.admin.speciality-manage', link: '/system/speciality-manage' },
        ]
    },
    { //2. Handbook Management Tab
        name: 'menu.admin.handbook',
        menus: [
            {name: 'menu.admin.handbook-manage', link: '/system/handbook-manage' },
        ]
    },


    // { //User Management
    //     name: 'menu.admin.user-manage',
    //     menus: [
    //         {
    //             name: 'menu.system.system-administrator.header',
    //             subMenus: [
    //                 { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
    //                 { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
    //                 { name: 'menu.system.system-administrator.product-manage', link: '/system/product-manage' },
    //                 { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
    //             ]
    //         },
    //         // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
    //     ]
    // },
];