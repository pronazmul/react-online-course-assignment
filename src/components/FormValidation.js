import React, { Component } from 'react';

class FormValidation extends Component {

    constructor(){
        super()

        this.state ={
            name:" ",
            email:" ",
            mobile:" ",
            address:" "
        }
    }

   onChangeHandle = (event) =>{
    let name = event.target.name
    let value = event.target.value
    this.setState({[name]:value})

    if(name==='name'){
        let namePattern = /^([a-zA-Z ]){2,30}$/;
        if(!namePattern.test(value)){
            this.setState({name:'Invalid Name'})
        }
    }
    if(name==='address'){
        let namePattern = /^([a-zA-Z ]){2,30}$/;
        if(!namePattern.test(value)){
            this.setState({address:'Invalid Address'})
        }
    }
    if(name==='email'){
        let namePattern = /\S+@\S+\.\S+/;
        if(!namePattern.test(value)){
            this.setState({email:'Invalid Email'})
        }
    }
    if(name==='mobile'){
        if(!Number(value)){
            this.setState({mobile:'Invalid Mobile Number'})
        }
    }


   }

//    onSubmitHandle = () =>{
//        alert(this.state.username)
//    }


    render() {
        return (
            <div className='col-md-5 mx-auto mt-5'>
                <div className="card bg-secondary">
                    <div className="card-header">
                        <h3 className='card-title text-center text-light'>Form Validation</h3>
                    </div>
                    <div className="card-body">
                        <p className='lead'>Your Name: {this.state.name}</p>
                        <p className='lead'>Your Email: {this.state.email}</p>
                        <p className='lead'>Your Phone No: {this.state.mobile}</p>
                        <p className='lead'>Your Address: {this.state.address}</p>
                    <form>
                        <input name='name' placeholder='Enter Name' onChange={this.onChangeHandle} className='form-control mt-1' type="text"/>
                        <input name='email' placeholder='Enter email' onChange={this.onChangeHandle} className='form-control mt-1' type="text"/>
                        <input name='mobile' placeholder='Enter mobile no' onChange={this.onChangeHandle} className='form-control mt-1' type="text"/>
                        <input name='address' placeholder='Enter address' onChange={this.onChangeHandle} className='form-control mt-1' type="text"/>
                        <input className = 'btn btn-info btn-block mt-4' type='submit' value='Submit'></input>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormValidation;