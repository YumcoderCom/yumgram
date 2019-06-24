/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import Inc from './components/__test__/counter/counter';
import Messager from './components/Messager';
import Page404 from './components/Page404';

const routes = [
  {
    name: 'login',
    path: '/',
    icon: 'dashboard',
    component: Inc
  },
  {
    name: 'messager',
    path: '/im',
    icon: 'dashboard',
    component: Messager
  },
  {
    name: 'page404',
    icon: 'page404',
    component: Page404
  }
];

export default routes;
