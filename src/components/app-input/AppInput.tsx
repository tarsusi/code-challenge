import './app-input.scss';

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import React from 'react';

import { IInputProps } from '../../models/interfaces/IInputProps';

const AppInput: React.FC<IInputProps> = ({ onChange }) => {
  return (
    <div className="app-input-container">
      <input
        className="app-input"
        type="text"
        placeholder="Search cryptocurrency, rates and prices"
        onChange={(event) => {
          onChange(event.target.value);
        }}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default AppInput;
