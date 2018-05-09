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
 * The cards container.
 *
 * @module containers/CardsContainer
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../state/actions/CardsActions';
import CardsList from '../components/CardsList';

/**
 * Maps the application state to the {components.CardsList} components inputs.
 *
 * @param  {Object} state - The state to be mapped.
 * @return {Object} - The mapped state.
 */
const mapStateToProps = state => ({
  cards: state.cards
});

/**
 * Maps the application actions to the {components.CardsList} components actions.
 *
 * @param  {Function} dispatch - The dispatch function.
 * @return {Object} - The mapped actions.
 */
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

/**
 * Creates a {components.CardsList} component with the inputs and actions mapped.
 *
 * @param  {Object} mapStateToProps - The mapped inputs.
 * @param  {Object} mapDispatchToProps - The mapped actions.
 * @return {ReactComponent} - The instantiated {components.CardsList}.
 */
export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
