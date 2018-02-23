import Home from '../views/page/home';
import Category from '../views/page/category';

export default [
  {
    path: '/shop',
    name: 'shop',
    component: Home,
    children: [
      {
        path: 'category',
        name: 'category',
        component: Category,
      }
    ],
  },
];