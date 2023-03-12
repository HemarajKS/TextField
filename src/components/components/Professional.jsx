import React from 'react';
import TextInput from '../TextInput/TextInput';

const Professional = (props) => {
  const { handleChange } = props;
  return (
    <div>
      {' '}
      <h1>Professional</h1>
      <TextInput
        name={'degree'}
        handleChange={handleChange}
        type={'professional'}
      />
      <TextInput
        name={'designation'}
        handleChange={handleChange}
        type={'professional'}
      />
      <TextInput
        name={'organization'}
        handleChange={handleChange}
        type={'professional'}
      />
    </div>
  );
};

export default Professional;
