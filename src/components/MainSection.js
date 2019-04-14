import React, { Component } from 'react';
import '../css/MainSection.css';
import Header from './Header';
import SearchField from './SearchField';
import backgr1 from '../img/backgr1.png';
import backgr2 from '../img/backgr2.png';

class MainSection extends Component{
    render(){
        return (
            <div className='background'>
            <img src={backgr1} alt='background' className='backgr1'/>
            <img src={backgr2} alt='background' className='backgr2'/>
                <div className='container'>
                    <Header />
                    <div className='titles'>
                        <h1>Let us Guide You Home</h1>
                        <div className='losung'>
                            Find the house of your dreams.
                        </div>
                    </div>
                    <SearchField />
                </div>
            </div>
        );
    }
}

export default MainSection;
