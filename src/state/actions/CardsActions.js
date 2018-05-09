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
 * Cards actions.
 *
 * Handles the payloads of information
 * that are sent from application to the store.
 *
 * @module state/CardsActions
 */
import cardsService from "../../api/cardsService";

/**
 * Add Cards action type.
 * @type {string}
 */
export const ADD_CARDS = "ADD_CARDS";

/**
 * Search Cards action type.
 * @type {string}
 */
export const SEARCH_CARDS = "SEARCH_CARDS";

/**
 * Fetches the cards from the server.
 *
 * @return {Function} - The function to be executed by the middleware.
 */
export function getCards() {
  return dispatch => cardsService.fetch().then(res => dispatch(addCards(res)));
}

/**
 * Search the cards by value on the server.
 *
 * @param {String} value - The value to search cards.
 *
 * @return {Function} - The function to be executed by the middleware.
 */
export function searchCards(value) {
  return dispatch => cardsService.search(value).then(res => dispatch(addCards(res)));
}

/**
 * Add cards action creator.
 *
 * @param {Object} cards - The cards list to be added to the state.
 *
 * @return {Object} - Represents the action to be created:
 *                    type - the type of action being performed
 *                    cards - action payload
 */
export function addCards(cards) {
  return {
    type: ADD_CARDS,
    cards
  };
}