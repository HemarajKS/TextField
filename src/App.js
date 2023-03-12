import { useEffect, useState } from 'react';
import './App.css';
import JSONPretty from 'react-json-pretty'; //this is just to format JSON , not required
import 'react-json-pretty/themes/monikai.css'; //this is just to format JSON , not required
import Personal from './components/components/Personal';
import Professional from './components/components/Professional';
import Place from './components/components/Place';
import MultiStep from 'react-multistep';
import Contact from './components/components/Contact';
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
      <MultiStep activeStep={1} showNavigation={true} showTitles={false}>
        <Personal handleChange={handleChange} />
        <Professional handleChange={handleChange} />
        <Place handleChange={handleChange} />
        <Contact handleChange={handleChange} />
      </MultiStep>
      {/* //this is just to format JSON , not required */}
      <JSONPretty data={state}></JSONPretty>
      {/* //this is just to format JSON , not required */}
    </div>
  );
}

export default App;
