/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mount } from 'enzyme';
// import ReactDOM from 'react-dom';

export default function(enhancer, propsIn) {
  let propsOut = null;

  function Component(props) {
    propsOut = enhancer(props);
    return null;
  }

  // const div = document.createElement('div');
  // let element = React.createElement(Component, propsIn);
  // ReactDOM.render(element, div);
  // ReactDOM.unmountComponentAtNode(div);

  mount(React.createElement(Component, propsIn));

  return () => propsOut;
}
