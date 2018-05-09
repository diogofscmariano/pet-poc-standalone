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
 * The main application.
 *
 * @module App
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import HeaderContainer from './containers/HeaderContainer';
import Container from './components/Container';

import './assets/img/**/**';
import './styles/main.scss';
import './styles/custom-grid.css';

/**
 * Renders the {containers.HeaderContainer} and {components.Container}.
 *
 * It also attaches the redux store provider to the component.
 */
render(
  <Provider store={store}>
    <div className="app">
      <HeaderContainer />
      <Container />
    </div>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
