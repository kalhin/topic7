import React, { Component } from 'react';
import './Search.css';

class Search extends Component{
    render(){
        return(
            <div className='search'>
                <img src={require('./img/search.png')} alt='search' />
                <div className='placeholder'>
                    Search for properties or keywords..
                </div>
            </div>
        );
    }
}

export default Search;