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
 * The Search Component module.
 *
 * @module components/Search
 */
import React, {Component} from 'react';

/**
 * Stateless component that represents a card for the given input.
 *
 * @param  {Object} card - The card input values.
 * @return {ReactComponent}
 */
class Search extends Component {
  render() {
    const {setFilter, clearFilter, filter} = this.props;

    return (
        <div className={"search" + (filter.length > 0 ? " active" : "") }>
          <div className="search-icon"/>
          <input onChange={(e) => { setFilter(e.target.value)} } value={filter}/>
          <div className="close-icon" onClick={clearFilter}/>
        </div>
    );
  }
}

export default Search;
