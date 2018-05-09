/*!
 * Copyright 2018 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import _ from 'lodash';

const cardsList = [
  {
    tabName: 'tab1',
    groupName: 'group1',
    ownerName: 'owner1'
  },
  {
    tabName: 'tab2',
    groupName: 'group1',
    ownerName: 'owner1'
  },
  {
    tabName: 'tab3',
    groupName: 'group2',
    ownerName: 'owner2'
  },
  {
    tabName: 'tab4',
    groupName: 'group2',
    ownerName: 'owner2'
  },
  {
    tabName: 'tab5',
    groupName: 'group3',
    ownerName: 'owner3'
  },
  {
    tabName: 'tab6',
    groupName: 'group3',
    ownerName: 'owner3'
  },
  {
    tabName: 'tab7',
    groupName: 'group3',
    ownerName: 'owner1'
  }
];

/**
 * Function that returns a promise for an array of cards.
 *
 * @return {Promise} - Rejected if any exception occurs while invoking the service.
 */
const fetch = () => {
  return new Promise(resolve => {
    return resolve(cardsList);
  });
};

const search = (value = '') => {
  return new Promise(resolve => {
    const results = _.filter(cardsList, card => {
      const isMatch = card.tabName.indexOf(value) > -1;
      return isMatch ? card : null;
    });
    console.log(results);
    return resolve(results);
  });
};

export default { fetch, search };
