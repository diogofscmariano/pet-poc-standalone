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
 * The User Component module.
 *
 * @module components/User
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class User extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false
    }
    // bind this to the toggleMenu function to be able to access the state inside the function
    this.toggleMenu = this.toggleMenu.bind(this);
    
    // function to handle when user clicks outside of the user menu
    this.handleClick = this.handleClick.bind(this);

    this.logoutUser = this.logoutUser.bind(this);
  }

  // toggle the menu state
  toggleMenu() {
    this.setState(prevState => ({
      showMenu: !prevState.showMenu
    }));
  }

  // logout the user
  logoutUser() {
    // call the logout endpoint and refresh the page - this will redirect to the login
    // page and if the user logs in successfully the login will redirect back to Boga
    fetch('/pentaho/Logout', { credentials: 'same-origin' })
    .then(() => {
      location.reload();
    });
  }

  // add listener for click event
  componentWillMount() {
    document.body.addEventListener('click', this.handleClick);
  }

  // clean up - remove click event listener
  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClick); 
  }

  handleClick(event) {
    // get container that we'll wait to be clicked outside
    const {container} = this.refs; 
    
    // get direct click event target
    const {target} = event;

    // if target is container - container was not clicked outside
    // if container contains clicked target - click was not outside of it
    if (target !== container && !container.contains(target)) {
      this.setState(prevState => ({
        showMenu: false
      }));
    }
  }

  render() {
    const {user} = this.props;

    return (
        <div className="user" ref="container">
          <div className={this.state.showMenu ? 'user-icon selected' : 'user-icon'} onClick={this.toggleMenu} />
          { this.state.showMenu &&
            <div className="user-menu" >
              <div className="user-name">{window.SESSION_NAME}</div>
              <div className="logout" onClick={this.logoutUser}>{user.logout}</div>
            </div>
          }
        </div> 
    );
  }
}

export default User;