import React, { Component } from 'react';
import MainSection from './MainSection';
import CardsSection from './CardsSections';
import ContactUS from './ContactUs';
import ForSale from './ForSale';
// import FeedbackSection from './FeedBackSection';
import Form from './Form';
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
                <Form />
                <Footer />
            </div>
        );
    }
}

export default App;