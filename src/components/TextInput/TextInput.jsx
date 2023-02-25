import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = (props) => {
  const { name, handleChange, type } = props;

  return (
    <div>
      <TextField
        id="outlined-controlled"
        label={name}
        onChange={(event) => {
          handleChange(event.target.value, name, type);
        }}
        margin="dense"
      />
    </div>
  );
};

export default TextInput;
