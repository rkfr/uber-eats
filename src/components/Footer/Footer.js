import React from 'react';
import './Footer.scss';

import { Select } from '../Select';

export const Footer = () => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
              className="footer__logo"
              src="./images/logo-white.svg"
              alt="Uber eats"
            />
            <Select
              name="Language"
              options={[
                { value: 'en', label: 'English' },
                { value: 'ru', label: 'Russian' },
              ]}
              value="en"
              iconUrl="./images/world.svg"
            />
          </div>

          <div className="footer__mobile-apps">
            <a href="#" className="footer__mobile-app">
              <img
                src="./images/appstore.png"
                alt="Google Play"
              />
            </a>
            <a href="#" className="footer__mobile-app">
              <img
                src="./images/gplay.png"
                alt="App Store"
              />
            </a>
          </div>
        </div>

        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intended">
            About UberEats
          </a>
          <a href="#" className="links__link">
            Read our blog
          </a>
          <a href="#" className="links__link">
            Sign up to deliver
          </a>
          <a href="#" className="links__link">
            Add your restaurant
          </a>
        </div>

        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intended">
            Get help
          </a>
          <a href="#" className="links__link">
            Read FAQs
          </a>
          <a href="#" className="links__link">
            View all cities
          </a>
        </div>
      </div>

      <div className="footer__bottom-part">
        <p className="footer__copyright">
          © 2019 Uber Technologies Inc.
        </p>

        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <a href="#" className="links__link">Privacy policy</a>
            <a href="#" className="links__link">Terms of  use</a>
            <a href="#" className="links__link">Pricing</a>
          </div>

          <div className="footer__social social">
            <a href="#" className="social__link">
              <img src="./images/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/insta.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
