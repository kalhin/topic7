import React, { Component } from 'react';
import '../css/SearchField.css';
import ForRent from './ForRent';
import Search from './Search';

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