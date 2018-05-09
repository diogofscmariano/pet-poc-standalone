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
 * The Content Component module.
 *
 * @module components/Content
 */
import React from "react";
import CardsListContainer from "../containers/CardsListContainer";

/**
 * Stateless component that represents a Content.
 * A Content is composed by a {containers.CardsListContainer}.
 *
 * @return {ReactComponent}
 */
const Content = () => (
  <div className="content container-fluid">
    <CardsListContainer />
  </div>
);

export default Content;
