import React, { Component } from 'react';
import './ForSale.css';
import ForSaleCard from './forSaleCard/ForSaleCard';
import ContactCard from './contactCard/ContactCard';

class ForSale extends Component {
    render() {
        return(
            <section className='forSale'>
                <img src={require('./img/background-image.png')} alt='backgr' className='img'/>
                <div className='container'>
                    <ForSaleCard />
                    <ContactCard />
                </div>
            </section>
        ); 
    }
}

export default ForSale; 