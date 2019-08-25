/* eslint-disable no-unused-vars */
/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import { Map } from 'immutable';
import React from 'react';
import { pipe, withState, withLifecycle } from '../../js/core/index';
import Config from '../../js/app/config';
import RequestAnimationFrame from '../../js/app/animate';

const init = props => Map({ elm: React.createRef(), raf: new RequestAnimationFrame() });

const componentDidMount = ({ data }) => {
  // Some browsers apply the "overall" scroll to document.documentElement (the <html> element)
  // and others to document.body (the <body> element).
  // For compatibility with both, you have to apply the scrolling to both.
  const top = data.get('elm').current.offsetHeight;
  const duration = 200;
  data.get('raf').animate(t => {
    const v = (top * t) / duration;
    document.body.scrollTop = v;
    document.body.parentElement.scrollTop = v;
  }, duration);
};
const componentWillUnmount = ({ data }) => {
  data.get('raf').cancle();
};

export default pipe(
  withState(init),
  withLifecycle({ componentDidMount, componentWillUnmount }),
);