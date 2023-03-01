import { useEffect, useState } from 'react';
import './App.css';
import TextInput from './components/TextInput/TextInput';
import JSONPretty from 'react-json-pretty'; //this is just to format JSON , not required
import 'react-json-pretty/themes/monikai.css'; //this is just to format JSON , not required
import DropDown from './components/DropDown';

function App() {
  const [state, setState] = useState({
    personal: {
      salutation: '',
      name: '',
      age: null,
      gender: '', //second child
    },
    professional: {
      degree: '',
      designation: '',
      organization: '', //second child
    },
    city: '',
    state: '', //first child
    contact: {
      countryCode: '',
      mobileNum: '',
    },
  });

  //this change here I created intermediate state object both for country code
  //and phone number, whenever these two fields change(useEffect) , adds countryCode+phonenumber
  //add to original object , in your code its formData
  const [contact, setContact] = useState({
    countryCode: '',
    mobileNum: '',
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      contact: {
        ...prevState['contact'],
        mobileNum: contact.countryCode + contact.mobileNum,
      },
    }));
  }, [contact]);

  console.log('contact', contact);

  const handleChange = (data, name, type) => {
    console.log(data, name, type);

    if (!type) {
      return setState((prevState) => ({
        ...prevState,
        [name]: data,
      }));
    } else {
      if (name === 'mobileNum' || name === 'countryCode') {
        return setContact((prevState) => ({
          ...prevState,
          [name]: data,
        }));
      }

      return setState((prevState) => ({
        ...prevState,
        [type]: {
          ...prevState[type],
          [name]: data,
        },
      }));
    }
  };

  return (
    <div className="App">
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

      <hr />

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

      <hr />

      <h1>Place</h1>
      <TextInput name={'city'} handleChange={handleChange} type={null} />
      <TextInput name={'state'} handleChange={handleChange} type={null} />

      <hr />

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
      {/* //this is just to format JSON , not required */}
      <JSONPretty data={state}></JSONPretty>
      {/* //this is just to format JSON , not required */}
    </div>
  );
}

export default App;
