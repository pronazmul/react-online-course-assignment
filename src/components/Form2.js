import React, { Component } from 'react';

class Form2 extends Component {

    constructor(){
        super()

        this.state ={
            username:" "
        }
    }

   onChangeHandle = (event) =>{
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]:value})
   }



    render() {
        return (
            <div className='col-md-5 mx-auto mt-5'>
                <div className="card bg-secondary">
                    <div className="card-header">
                        <h3 className='card-title text-center'>Practice form</h3>
                    </div>
                    <div className="card-body">
                    <form>
                        <p className='text-center lead'>{this.state.username}</p>
                        <input name='username' onChange={this.onChangeHandle} className='form-control' type="text"/>
                        <input className = 'btn btn-info btn-block mt-4' type='submit' value='Submit'></input>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form2;