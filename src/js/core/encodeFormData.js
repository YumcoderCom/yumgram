/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

export default function encodeFormData(key, value, prevKey) {
  let field = key;
  if (prevKey) {
    field = `${prevKey}[${key}]`;
  }
  if (typeof value === 'string') {
    return `${encodeURI(field)}=${encodeURIComponent(value)}`;
  }
  if (typeof value !== 'object') {
    return `${encodeURI(field)}=${String(value)}`;
  }
  if (value && typeof value.toJSON === 'function') {
    return `${encodeURI(field)}=${encodeURI(value.toJSON())}`;
  }
  const pieces = [];
  if (Array.isArray(value)) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < value.length; i++) {
      pieces.push(encodeFormData('', value[i], field));
    }
    return pieces.join('&');
  }
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const k in value) {
    pieces.push(encodeFormData(k, value[k], field));
  }

  return pieces.join('&');
}