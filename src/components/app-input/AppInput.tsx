import './app-input.scss';

import React from 'react';

import { IInputProps } from '../../models/interfaces/IInputProps';

const AppInput: React.FC<IInputProps> = ({ onChange }) => {
  return (
    <input
      className="app-input"
      type="text"
      placeholder="Search cryptocurrency, rates and prices"
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};

export default AppInput;
