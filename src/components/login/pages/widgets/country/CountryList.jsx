/*
 * Copyright (c) 2019-present, The Yumcoder Authors. All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

import React from 'react';
import { FixedSizeList } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
import { Row, List, Input } from 'antd';
import i18n from '@locale';
import countryController from './CountryList.controller';
import { CustomScrollbars } from '@components';
import styles from './CountryList.module.less';

const { Search } = Input;

// todo remove div
const CountryList = ({ onItemSelected }) => {
  const { data, onSearch } = countryController();
  return (
    <Row className={styles.country_page}>
      <div className={styles.search_country}>
        <Search
          placeholder={i18n.t('modal_search')}
          onChange={onSearch}
          allowClear
          ref={input => input && input.focus()}
        />
      </div>
      <Row className={styles.search_country_list}>
        {/* <AutoSizer>
          {({ width, height }) => ( */}
        <FixedSizeList
          height={200}
          itemCount={data.get('count')}
          itemSize={32}
          width={300}
          outerElementType={CustomScrollbars}
        >
          {({ index, style }) => {
            const item = data.get('countries').get(index);
            if (item) {
              return (
                <List.Item
                  onClick={() => onItemSelected(item)}
                  key={index}
                  style={style}
                  className={styles.cell}
                >
                  <List.Item.Meta title={item.name} />
                  <span>{item.code}</span>
                </List.Item>
              );
            }
            return <div key={index}>{i18n.t('modal_more')}</div>;
          }}
        </FixedSizeList>
        {/* )}
        </AutoSizer> */}
      </Row>
    </Row>
  );
};

export default CountryList;
