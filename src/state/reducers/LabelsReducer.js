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
 * Labels reducer.
 *
 * @module state/reducers/LabelsReducer
 */
import config from '../../config';

/**
 * Handles labels updates.
 *
 * Returns the default localized labels loaded from config file.
 *
 * @param {Object} state - A state representation.
 * @param {Object} action - The dispatched action.
 *
 * @return {Object} - Returns next state (default value if none exists or previous state if no work needs to be done)
 */
const LabelsReducer = (state = config.labels, action) => state;

export default LabelsReducer;
