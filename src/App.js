import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput/TextInput';
import JSONPretty from 'react-json-pretty'; //this is just to format JSON , not required
import 'react-json-pretty/themes/monikai.css'; //this is just to format JSON , not required

function App() {
  const [state, setState] = useState({
    personal: {
      name: '',
      age: null,
      gender: '',
    },
    professional: {
      degree: '',
      designation: '',
      organization: '',
    },
  });

  const handleChange = (data, name, type) => {
    console.log(data, name, type);
    return setState((prevState) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        [name]: data,
      },
    }));
  };

  return (
    <div className="App">
      <h1>Personal</h1>
      <TextInput name={'name'} handleChange={handleChange} type={'personal'} />
      <TextInput name={'age'} handleChange={handleChange} type={'personal'} />
      <TextInput
        name={'gender'}
        isDropdown={true}
        list={['male', 'female', 'other']}
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
      {/* //this is just to format JSON , not required */}
      <JSONPretty data={state}></JSONPretty>
      {/* //this is just to format JSON , not required */}
    </div>
  );
}

export default App;
