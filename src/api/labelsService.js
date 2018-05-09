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
 * The Labels service interface to load localized labels.
 *
 * @module api/labelsService
 */
import config from '../config';

/**
 * Function that returns the localized labels.
 *
 * @return {Promise} - Rejected if any exception occurs while invoking the service.
 */
const getLabels = () => {
  return config.labels;
};

export default { getLabels };
