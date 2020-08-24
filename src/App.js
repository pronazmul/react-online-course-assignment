import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FormSingle from './components/FormSingle';
import FormMultiple from './components/FormMultiple';
import FormValidation from './components/FormValidation';
import SelectOption from './components/SelectOption';



function App() {
  return (   
          <div>
              <h3 className='text-center'>Form Validation Using Regular Expression</h3>
              <FormValidation></FormValidation>
              <hr></hr>
              <h3 className='text-center'>event.target.name and event.target.value</h3>
              <FormMultiple></FormMultiple>
              <hr></hr>
              <h3 className='text-center'>event.target.value</h3>
              <FormSingle></FormSingle>
              <hr></hr>
              <h3 className='text-center'>event.target.value</h3>
              <SelectOption></SelectOption>
          </div>
   )
}

export default App;
