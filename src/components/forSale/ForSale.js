import React, { Component } from 'react';
import './ForSale.css';
import background from './img/background-image.png';
import ForSaleCard from './forSaleCard/ForSaleCard';
import ContactCard from './contactCard/ContactCard';

class ForSale extends Component {
    render() {
        return(
            <section className='forSale'>
                <img src={background} className='img' alt='backgr' />
                <div className='container'>
                    <ForSaleCard />
                    <ContactCard />
                </div>
            </section>
        ); 
    }
}

export default ForSale; 