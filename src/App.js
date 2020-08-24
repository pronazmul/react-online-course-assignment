import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form';
import Form2 from './components/Form2';



function App() {
  return (   
          <div>
              <h3 className='text-center'>Get Date event.target.name</h3>
              <Form2></Form2>
              <hr></hr>
              <h3 className='text-center'>Get Date event.target.value</h3>
              <Form></Form>
          </div>
   )
}

export default App;
