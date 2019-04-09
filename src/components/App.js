import React, { Component } from 'react';
import MainSection from './mainSection/MainSection';
import CardsSection from './cardsSection/CardsSections';

class App extends Component{
    render(){
        return(
            <div>
                <MainSection />
                <CardsSection />
            </div>
        );
    }
}

export default App;