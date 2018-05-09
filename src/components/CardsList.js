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
 * The CardsList Component module.
 *
 * @module components/CardsList
 */
import _ from 'lodash';
import React from 'react';
import Card from '../components/Card';

class CardsList extends React.Component {
  componentDidMount() {
    this.props.getCards();
  }

  render() {
    return (
      <div className="cards-list row">
        {_.map(this.props.cards, (card, i) => (
          <Card key={'card_' + i} {...card} />
        ))}
      </div>
    );
  }
}

export default CardsList;
