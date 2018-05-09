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
 * The SideBar Component module.
 *
 * @module components/SideBar
 */
import React from 'react';

/**
 * Stateless component that represents a side bar for the given input.
 *
 * @param  {Object} sidebar - The side bar input values.
 * @return {ReactComponent}
 */
const SideBar = ({ sidebar }) =>
  <div className="side-bar">
    <div className="side-bar-header">
      {sidebar.allinsights}
    </div>
  </div>;

export default SideBar;
