import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

import { Input } from '../Input';

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/logo.svg" alt="Uber eats" />

            <div className="header__delivery-info">
              <Input
                name="address"
                value=""
                placeholder="Address"
                iconUrl="./images/place.svg"
                onChange={() => console.log('changed')}
              />
              <Input
                name="time"
                value=""
                placeholder="Time"
                onChange={() => console.log('changed')}
              />
            </div>

            <Input
              name="search"
              value=""
              placeholder="Search"
              iconUrl="./images/search.svg"
              onChange={() => console.log('changed')}
              className="header__search"
            />

            <a
              className="header__link"
              href="/sign-in"
            >
              Sign in
            </a>
          </div>

        </div>
      </header>
    );
  }
}

Header.propTypes = {};
