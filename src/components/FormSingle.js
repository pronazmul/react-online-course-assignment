import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class FormSingle extends Component {

    constructor(){
        super()

        this.state ={
            name:" "
        }
    }

   onChangeHandle = (event) =>{
    let data = event.target.value
    this.setState({name:data})
   }



    render() {
        return (
            <div className='col-md-5 mx-auto mt-5'>
                <div className="card bg-secondary">
                    <div className="card-header">
                        <h3 className='card-title text-center text-light'>Single Form Data</h3>
                    </div>
                    <div className="card-body">
                    <form>
                        <p className='lead'>Input Value: {this.state.name}</p>
                        <input onChange={this.onChangeHandle} className='form-control' type="text"/>
                        <input className = 'btn btn-info btn-block mt-4' type='submit' value='Submit'></input>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormSingle;