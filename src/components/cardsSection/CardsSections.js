import React, { Component } from 'react';
import './CardsSections.css';
import Cards from './cards/Cards';

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
            <div className='container'>
                <h2>Featured Properties</h2>
                {printCards({cardsList})}
                <button>All Properties</button>
            </div>
        );
    }
}

function printCards({cardsList}){
    const cardsListList = cardsList.map(element =>
        <div key={element.name} className='card'>
            <img src={require('./cards/img/home.png')} alt='house'/>
            <div className='info'>
                <h4>{element.name}</h4>
                <p className='price'>${element.price}</p>
                <p class='address'>{element.address}</p>
                <div className='options'>
                    <img src={require('./cards/img/bed.png')} alt='bed'/>
                    <p>{element.options.beds} beds</p>
                    <img src={require('./cards/img/shower.png')} alt='bed'/>
                    <p>{element.options.baths} baths</p>
                    <img src={require('./cards/img/squard.png')} alt='bed'/>
                    <p>{element.options.SqFt} SqFt</p>
                </div>
            </div>
        </div>
    );

    return(
        <div className='cards'>{cardsListList}</div>
    );
}

export default CardsSections;