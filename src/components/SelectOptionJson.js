import React, { Component } from 'react';

class SelectOptionJson extends Component {

    jsonArray = [
        {name:'Sania', age:20},
        {name:'Nazmul Huda', age:25},
        {name:'Billal Hossain', age:25},
        {name:'Lima', age:21}

    ]

    render() {
        return (
            <div className='col-md-5 mx-auto my-5'>
            <div className="card bg-secondary">
                <div className="card-header">
                    <h3 className='card-title text-center text-light'>Select Option in Using JSON</h3>
                </div>
                <div className="card-body text-dark">
                <form>
                    <select className='form-control'>
                        {this.jsonArray.map(data => <option>{data.name}</option>)}
                    </select>
                </form>
                </div>
            </div>
        </div>
        );
    }
}

export default SelectOptionJson;