import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FormSingle from './components/FormSingle';
import FormMultiple from './components/FormMultiple';



function App() {
  return (   
          <div>
              <h3 className='text-center'>event.target.name and event.target.value</h3>
              <FormMultiple></FormMultiple>
              <hr></hr>
              <h3 className='text-center'>event.target.value</h3>
              <FormSingle></FormSingle>
          </div>
   )
}

export default App;
