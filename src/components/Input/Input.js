import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Input.scss';

export class Input extends PureComponent {
  state = {
    isFocused: false,
  };

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  focus = () => this.inputRef.current.focus();

  render() {
    const {
      iconUrl,
      value,
      onChange,
      type,
      placeholder,
      name,
      className,
    } = this.props;

    const { isFocused } = this.state;

    const rootClass = classNames('control', {
      'control--focused': isFocused,
      [className]: !!className,
    });

    return (
      <div
        className={rootClass}
        onClick={this.focus}
        role="presentation"
      >
        {!!iconUrl && (
          <img
            src={iconUrl}
            alt={placeholder}
            className="control__icon"
          />
        )}

        <input
          ref={this.inputRef}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className="control__input"
        />
      </div>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  iconUrl: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  iconUrl: '',
  className: '',
};
