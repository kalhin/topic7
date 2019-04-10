import React, { Component } from 'react';
import './ForSaleCard.css';

class ForSaleCard extends Component {
    render() {
        return(
            <div className='card-card sale-card'>
                <button>FOR SALE</button>
                <h4>Villa With Pool For Sale</h4>
                <p className='price'>$225,000</p>
                <p className='address'>263 S Rexford Dr, Beverly Hills, CA 90212</p>
                <div className='options'>
                    <img src={require('./img/bed.png')} alt='bed'/>
                    <p>4 Beds</p>
                    <img src={require('./img/shower.png')} alt='baths'/>
                    <p>2 Baths</p>
                    <img src={require('./img/squard.png')} alt='sqft'/>
                    <p>980 SqFt</p>
                </div>
            </div>
        ); 
    }
}

export default ForSaleCard; 