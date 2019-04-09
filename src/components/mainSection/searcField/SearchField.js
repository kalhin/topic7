import React, { Component } from 'react';
import './SearchField.css';
import ForRent from '../forRent/ForRent';
import Search from '../search/Search';

class SearchField extends Component{
    render(){
        return(
            <div className="search-field">
                <ForRent />
                <Search />
            </div>
        );
    }
}

export default SearchField;