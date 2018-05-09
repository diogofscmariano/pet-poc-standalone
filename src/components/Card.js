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
 * The Card Component module.
 *
 * @module components/Card
 */
import React from "react";

/**
 * Stateless component that represents a card for the given input.
 *
 * @param  {Object} card - The card input values.
 * @return {ReactComponent}
 */
const Card = ({ tabName, groupName, ownerName }) => (
  <div className="card-container col-xs-12 col-sm-6 col-md-4 col-lg-3">
    <div className="card">
      <div className="card-header">
        <div className="card-title">{tabName}</div>
      </div>
      <div className="card-group">{groupName}</div>
      <div className="card-owner">{ownerName}</div>
      <div className="card-footer" />
    </div>
  </div>
);

export default Card;
