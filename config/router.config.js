export default [
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/lab' },
      {
        path: '/lab',
        name: '实验室',
        icon: 'dashboard',
        component: './Lab/Index'
      },
      {
        path: '/base',
        name: '基础管理',
        icon: 'form',
        component: './Base/Index'
      },
      {
        path: '/learninginfos',
        name: '学习资料',
        icon: 'book',
        component: './Learninginfos/Index'
      },
      {
        path: '/system',
        name: '系统管理',
        icon: 'setting',
        component: './System/Index'
      },
      {
        component: '404',
      }
    ],
  },
];
