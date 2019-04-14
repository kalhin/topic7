import React, { Component } from 'react';
import MainSection from './MainSection';
import CardsSection from './CardsSections';
import ContactUS from './ContactUs';
import ForSale from './ForSale';
// import FeedbackSection from './FeedBackSection';
import Footer from './Footer';

class App extends Component{
    render(){
        return(
            <div>
                <MainSection />
                <CardsSection />
                <ContactUS />
                <ForSale />
                {/* <FeedbackSection /> */}
                <Footer />
            </div>
        );
    }
}

export default App;