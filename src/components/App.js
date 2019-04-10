import React, { Component } from 'react';
import MainSection from './mainSection/MainSection';
import CardsSection from './cardsSection/CardsSections';
import ContactUS from './contactUsSection/ContactUs';
import ForSale from './forSale/ForSale';
// import FeedbackSection from './feedbackSection/FeedBackSection';
import Footer from './footer/Footer';

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