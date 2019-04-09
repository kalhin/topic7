import React, { Component } from 'react';
import './MainSection.css';
import Header from './header/Header';
import SearchField from './searcField/SearchField';

class MainSection extends Component{
    render(){
        return (
            <div>
                <Header />
                <div className='titles'>
                    <h1>Let us Guide You Home</h1>
                    <div className='losung'>
                        Find the house of your dreams.
                    </div>
                </div>
                <SearchField />
            </div>
        );
    }
}

export default MainSection;