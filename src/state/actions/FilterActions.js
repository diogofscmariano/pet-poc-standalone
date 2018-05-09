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

import { searchCards } from './CardsActions';

export const SET_FILTER = "SET_FILTER";

/**
 * Updates filter state, dispatches searchCards action.
 *
 * @param {String} value - The value to search cards.
 *
 * @return {Function} - The function to be executed by the middleware.
 */
export function setFilter(filter) {
  return dispatch => Promise.all([
    dispatch(_setFilterAction(filter)),
    dispatch(searchCards(filter))
  ]);
}

/**
 * Updates filter state with empty value.
 *
 * @return {Function} - The function to be executed by the middleware.
 */
export function clearFilter() {
  return setFilter();
}

/**
 * Set filter action creator.
 *
 * @param {string} value - The filter value.
 *
 * @return {Object} - Represents the action to be created:
 *                    type - the type of action being performed
 *                    value - action payload
 * @private
 */
function _setFilterAction(filter) {
  return {
    type: SET_FILTER,
    filter
  }
}
