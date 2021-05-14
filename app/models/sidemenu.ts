import { 
    faHome,
    faPlug,
    faCarBattery,
    faTag,
    faSquareRootAlt,
    faInfoCircle,
    faExclamationTriangle,
    faUserTag,
    faFileMedical,
    faHdd,
    faEnvelope,
    faMicrochip,
    faChartArea,
    faDatabase,
    faCog,
    faIndustry,
    faBolt,
    faUserFriends,
    faIdBadge,
    faMapMarkerAlt,
    faFlask,
    faVial,
    faUserPlus,
    faUserEdit,
    faUserCog,
    faPercentage,
    faInfo,
    faAsterisk

  } 
  from '@fortawesome/free-solid-svg-icons';
export const sidemenuItems = {
    title: 'Energy Manager',
    menu: [
        {
            name: 'Dashboard',
            icon: faHome,
            link: '/dashboard'
        },
    ],

    submenu: [
        {
            id: 'menu2',
            name: 'Models & Tags',
            icon: faTag,
            items: [
                {
                    name: 'Energy Models',
                    icon: faCarBattery,
                    link: '/eTelematics'
                },
                {
                    name: 'Message Tags',
                    icon: faTag,
                    link: '/messageTags'
                },
                {
                    name: 'Data Modules',
                    icon: faInfoCircle,
                    link: '/dataModules'
                },
                {
                    name: 'Data Defination',
                    icon: faInfo,
                    link: '/dataFormats'
                },
                {
                    name: 'Formula Tags',
                    icon: faPercentage,
                    link: '/formulaTags'
                },
                {
                    name: 'Tag Formulas',
                    icon: faSquareRootAlt,
                    link: '/tagFormulas'
                },
                {
                    name: 'Warning Tags',
                    icon: faExclamationTriangle,
                    link: '/warningTags'
                },
                {
                    name: 'Control Tags',
                    icon: faAsterisk,
                    link: '/controlTags'
                },
                {
                    name: 'Control - Detail  Tags',
                    icon: faTag,
                    link: '/controlDetailTags'
                },
                {
                    name: 'Tag Filters',
                    icon: faUserTag,
                    link: '/xTagFilters'
                },
                {
                    name: 'Filter Tags',
                    icon: faTag,
                    link: '/xfilterTags'
                },
                {
                    name: 'Health Setup',
                    icon: faFileMedical,
                    link: '/healthSetup'
                },
            ]
        },
        {
            id: 'menu3',
            name: 'Meters',
            icon: faMicrochip,
            items: [
                {
                    name: 'Energy Meters',
                    icon: faHdd,
                    link: '/tmatDevices'
                },
                
            ]
        },
        {
            id: 'menu4',
            name: 'Messages',
            icon: faEnvelope,
            items: [
                {
                    name: 'Message Logs',
                    icon: faEnvelope,
                    link: '/messageLogs'
                },
                {
                    name: 'Tag Messags',
                    icon: faTag,
                    link: '/tagMessages'
                },
                {
                    name: 'Log Messages',
                    icon: faEnvelope,
                    link: '/logMessages'
                },
               
                {
                    name: 'Warning Logs',
                    icon: faExclamationTriangle,
                    link: '/warningLogs'
                },
                
            ]
        },
        {
            id: 'menu5',
            name: 'Reports',
            icon: faChartArea,
            items: [
                {
                    name: 'Meter Data',
                    icon: faDatabase,
                    link: '/meterdata'
                },              
            ]
        },
        {
            id: 'menu6',
            name: 'Master Setup',
            icon: faCog,
            items: [
                {
                    name: 'Manufacturers',
                    icon: faIndustry,
                    link: '/firstBuyers'
                },
                {
                    name: 'Dealer/Integrators',
                    icon: faBolt,
                    link: '/regdDealers'
                },
                {
                    name: 'Client/ Sites',
                    icon: faUserFriends,
                    link: '/regdClients'
                },
                {
                    name: 'Power Panels',
                    icon: faBolt,
                    link: '/powerPanels'
                },
                {
                    name: 'Meter Labels',
                    icon: faIdBadge,
                    link: '/stickLabels'
                },
                {
                    name: 'Geo Locations',
                    icon: faMapMarkerAlt,
                    link: '/globalFence'
                },
                {
                    name: 'Units of Measure',
                    icon:faFlask,
                    link: '/metricUnits'
                },
                {
                    name: 'Units Conversion',
                    icon:faVial,
                    link: '/unitFactors'
                },
                
            ]
        },
        {
            id: 'menu7',
            name: 'Manage Users',
            icon: faUserCog,
            items: [
                {
                    name: 'Manage Users',
                    icon: faUserPlus,
                    link: '/manageUsers'
                },
                {
                    name: 'Users Roles',
                    icon: faUserEdit,
                    link: '/accessRoles'
                },                
            ]
        },
    ]
}
    
