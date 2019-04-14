import React, { Component } from 'react';
import '../css/ForSaleCard.css';
import bed from '../img/bed.png';
import shower from '../img/shower.png';
import squard from '../img/squard.png';

class ForSaleCard extends Component {
    render() {
        return(
            <div className='card-card sale-card'>
                <button>FOR SALE</button>
                <h4>Villa With Pool For Sale</h4>
                <p className='price'>$225,000</p>
                <p className='address'>263 S Rexford Dr, Beverly Hills, CA 90212</p>
                <div className='options'>
                    <img src={bed} alt='bed'/>
                    <p>4 Beds</p>
                    <img src={shower} alt='baths'/>
                    <p>2 Baths</p>
                    <img src={squard} alt='sqft'/>
                    <p>980 SqFt</p>
                </div>
            </div>
        ); 
    }
}

export default ForSaleCard; 