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

/**
 * Cards reducer.
 *
 * @module state/reducers/CardsReducer
 */
import { ADD_CARDS, SEARCH_CARDS } from '../actions/CardsActions';
import _ from 'lodash';

/**
 * Produces an empty cards list
 *
 * @return {Array} - Empty cards array.
 * @private
 */
let cards = [];

/**
 * Handles cards updates.
 *
 * Determines what sort of update needs to be done based on the type of the action,
 * and returns next state representation.
 *
 * @param {Object} state - A state representation.
 * @param {Object} action - The dispatched action.
 *
 * @return {Object} - Returns next state (default value if none exists or previous state if no work needs to be done)
 */
const CardsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CARDS:
      cards = action.cards || [];
      return cards;

    default:
      return state;
  }
};

export default CardsReducer;
