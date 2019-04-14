import React, { Component } from 'react';
import '../css/CardsSections.css';
import home from '../img/home.png';
import bed from '../img/bed.png';
import shower from '../img/shower.png';
import squard from '../img/squard.png';

const cardsList = [
    {name: 'Villa With Pool', price: 225.000, address: '263 S Rexford Dr, Beverly Hills, CA 90212', options: {beds: 4, baths: 5, SqFt: 980}},
    {name: 'Villa On The Beach', price: 225.000, address: '263 S Rexford Dr, Beverly Hills, CA 90212', options: {beds: 4, baths: 5, SqFt: 980}},
    {name: 'Villa In The Wood', price: 225.000, address: '263 S Rexford Dr, Beverly Hills, CA 90212', options: {beds: 4, baths: 5, SqFt: 980}},
    {name: 'Villa With 2 Pool', price: 225.000, address: '263 S Rexford Dr, Beverly Hills, CA 90212', options: {beds: 4, baths: 5, SqFt: 980}},
    {name: 'Villa Small', price: 225.000, address: '263 S Rexford Dr, Beverly Hills, CA 90212', options: {beds: 4, baths: 5, SqFt: 980}},
    {name: 'Villa For Sale', price: 225.000, address: '263 S Rexford Dr, Beverly Hills, CA 90212', options: {beds: 4, baths: 5, SqFt: 980}},
];

class CardsSections extends Component{
    render(){
        return(
            <section>
                <div className='container'>
                    <h2>Featured Properties</h2>
                    <div  className='cards'>
                        {cardsList.map(element =>
                            <div key={element.name} className='card'>
                                <img src={home} alt='house'/>
                                <div className='info'>
                                    <h4>{element.name}</h4>
                                    <p className='price'>${element.price}</p>
                                    <p className='address'>{element.address}</p>
                                    <div className='options'>
                                        <img src={bed} alt='bed'/>
                                        <p>{element.options.beds} beds</p>
                                        <img src={shower} alt='bed'/>
                                        <p>{element.options.baths} baths</p>
                                        <img src={squard} alt='bed'/>
                                        <p>{element.options.SqFt} SqFt</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <button>All Properties</button>
                </div>
            </section>
        );
    }
}

export default CardsSections;