import React, { Component } from 'react';
import '../css/Form.css';

class Form extends Component{
    render(){
        return(
            <section className='form'>
                <div className='container'>
                    <form className='form-form'>
                        <label>name:
                            <input type='text' />
                        </label>
                        <br />
                        <label>email:
                            <input type='text' />
                        </label>
                        <button type='button'>SUBMIT</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Form;