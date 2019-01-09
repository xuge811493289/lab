export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/lab' },
      {
        path: '/lab',
        name: 'lab',
        icon: 'dashboard',
        component: './Lab/Index'
      },
      {
        path: '/base',
        name: 'base',
        icon: 'dashboard',
        component: './Base/Index'
      },
      {
        path: '/learninginfos',
        name: 'learninginfos',
        icon: 'dashboard',
        component: './Learninginfos/Index'
      },
      {
        path: '/system',
        name: 'system',
        icon: 'dashboard',
        component: './System/Index'
      },
      {
        component: '404',
      }
    ],
  },
];
