import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const DropDown = (props) => {
  const { name, handleChange, type, list, defaultValue } = props;

  return (
    <div>
      {' '}
      <TextField
        id="outlined-select-currency"
        select
        label={name}
        defaultValue={defaultValue}
        onChange={(event) => {
          handleChange(event.target.value, name, type);
        }}
      >
        {list &&
          list.length > 0 &&
          list.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </TextField>
    </div>
  );
};

export default DropDown;
