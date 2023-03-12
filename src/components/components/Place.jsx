import React from 'react';
import TextInput from '../TextInput/TextInput';

const Place = (props) => {
  const { handleChange } = props;
  return (
    <div>
      <h1>Place</h1>
      <TextInput name={'city'} handleChange={handleChange} type={null} />
      <TextInput name={'state'} handleChange={handleChange} type={null} />

      <hr />
    </div>
  );
};

export default Place;
