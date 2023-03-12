import React from 'react';
import DropDown from '../DropDown';
import TextInput from '../TextInput/TextInput';

const Contact = (props) => {
  const { handleChange } = props;
  return (
    <div>
      {' '}
      <h1>Contact</h1>
      <DropDown
        name={'countryCode'}
        handleChange={handleChange}
        type={'contact'}
        list={['+91', '+41', '+44', '+96', '+92']}
        defaultValue={'+91'}
      />
      <TextInput
        name={'mobileNum'}
        handleChange={handleChange}
        type={'contact'}
      />
    </div>
  );
};

export default Contact;
