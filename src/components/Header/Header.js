import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

import { Input } from '../Input';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { address, time, search } = this.state;

    return (
      <header className="header">
        <div className="content">
          <div className="header__inner">
            <img src="./images/logo.svg" alt="Uber eats" />

            <div className="header__delivery-info">
              <Input
                name="address"
                value={address}
                placeholder="Address"
                iconUrl="./images/place.svg"
                onChange={this.handleChange}
              />
              <Input
                name="time"
                value={time}
                placeholder="Time"
                type="time"
                onChange={this.handleChange}
              />
            </div>

            <Input
              name="search"
              value={search}
              placeholder="Search"
              iconUrl="./images/search.svg"
              onChange={this.handleChange}
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
