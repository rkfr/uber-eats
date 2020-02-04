import React, { Component } from 'react';
import './Header.scss';

import { Input } from '../Input';

export class Header extends Component {
  state = {
    address: '',
    time: '',
    search: '',
    isMobileSearchVisible: false,
    isMobileDeliveryVisible: false,
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  toggleSearch = () => this.setState(({ isMobileSearchVisible }) => ({
    isMobileSearchVisible: !isMobileSearchVisible,
    isMobileDeliveryVisible: false,
  }))

  toggleDelivery = () => this.setState(({ isMobileDeliveryVisible }) => ({
    isMobileDeliveryVisible: !isMobileDeliveryVisible,
    isMobileSearchVisible: false,
  }))

  closeMobile = () => this.setState({
    isMobileDeliveryVisible: false,
    isMobileSearchVisible: false,
  });

  render() {
    const {
      address,
      time,
      search,
      isMobileSearchVisible,
      isMobileDeliveryVisible,
    } = this.state;

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

            <div className="header__search">
              <Input
                name="search"
                value={search}
                placeholder="Search"
                iconUrl="./images/search.svg"
                onChange={this.handleChange}
              />
            </div>

            <div className="header__toggle-buttons">
              <button
                className="header__toggle-btn"
                type="button"
                onClick={this.toggleDelivery}
              >
                <img
                  src="./images/place.svg"
                  alt="place icon"
                />
              </button>
              <button
                className="header__toggle-btn"
                type="button"
                onClick={this.toggleSearch}
              >
                <img
                  src="./images/search.svg"
                  alt="search icon"
                />
              </button>
            </div>

            <a
              className="header__link"
              href="/sign-in"
            >
              Sign in
            </a>
          </div>
          {(isMobileSearchVisible || isMobileDeliveryVisible) && (
            <div className="header__mobile-controls mobile-controls">
              {isMobileSearchVisible && (
                <Input
                  label="Find"
                  name="search"
                  value={search}
                  placeholder="Search"
                  iconUrl="./images/search.svg"
                  isSmall={false}
                  onChange={this.handleChange}
                />
              )}

              {isMobileDeliveryVisible && (
                <>
                  <Input
                    label="Where"
                    name="address"
                    value={address}
                    placeholder="Address"
                    iconUrl="./images/place.svg"
                    isSmall={false}
                    onChange={this.handleChange}
                  />
                  <Input
                    label="To"
                    name="time"
                    value={time}
                    placeholder="Time"
                    type="time"
                    isSmall={false}
                    onChange={this.handleChange}
                  />
                </>
              )}

              <button
                onClick={this.closeMobile}
                type="button"
                className="mobile-controls__close"
              >
                <img src="./images/close.svg" alt="Close" />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
}
