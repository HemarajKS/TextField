import React from 'react';
import DropDown from '../DropDown';
import TextInput from '../TextInput/TextInput';

const Personal = (props) => {
  const { handleChange } = props;
  return (
    <div>
      {' '}
      <h1>Personal</h1>
      <DropDown
        name={'salutation'}
        handleChange={handleChange}
        type={'personal'}
        list={['Mr.', 'Mrs.', 'Ms.']}
        defaultValue={'+91'}
      />
      <TextInput name={'name'} handleChange={handleChange} type={'personal'} />
      <TextInput name={'age'} handleChange={handleChange} type={'personal'} />
      <TextInput
        name={'gender'}
        handleChange={handleChange}
        type={'personal'}
      />
    </div>
  );
};

export default Personal;
