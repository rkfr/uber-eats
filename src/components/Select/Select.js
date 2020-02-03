import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

export const Select = (props) => {
  const {
    name,
    value,
    onSelect,
    options,
    iconUrl,
  } = props;

  return (
    <div className="select">
      <select
        name={name}
        value={value}
        onChange={onSelect}
        className="select__input"
      >
        {options.map(({ value: optionValue, label }) => (
          <option
            className="select__option"
            key={optionValue}
            value={optionValue}
          >
            { label }
          </option>
        ))}
      </select>
      {!!iconUrl && (
        <img className="select__icon" src={iconUrl} alt="select icon" />
      )}

      <img
        src="./images/arrow-down.svg"
        alt="arrow down"
        className="select__arrow"
      />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  iconUrl: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
};

Select.defaultProps = {
  options: [],
  iconUrl: '',
  onSelect: () => {},
};
