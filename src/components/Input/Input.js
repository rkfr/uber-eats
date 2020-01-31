import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export const Input = (props) => {
  const {
    iconUrl,
    value,
    onChange,
    type,
    placeholder,
    name,
    className,
  } = props;

  const rootClass = `control ${className}`;

  return (
    <div className={rootClass}>
      {!!iconUrl && (
        <img
          src={iconUrl}
          alt={placeholder}
          className="control__icon"
        />
      )}

      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="control__input"
      />
    </div>
  );
};

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
