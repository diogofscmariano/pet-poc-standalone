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
 * The side bar container.
 *
 * @module containers/SideBarContainer
 */
import React from "react";
import { connect } from "react-redux";
import SideBar from '../components/SideBar';

/**
 * Maps the application state to the {components.SideBar} components inputs.
 *
 * @param  {Object} state - The state to be mapped.
 * @return {Object} - The mapped state.
 */
const mapStateToProps = state => ({
  sidebar: state.labels.sidebar
});

/**
 * Creates a {components.SideBar} component with the inputs mapped.
 *
 * @param  {Object} mapStateToProps - The mapped inputs.
 * @return {ReactComponent} - The instantiated {components.SideBar}.
 */
export default connect(mapStateToProps)(SideBar);
