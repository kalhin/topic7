import React, { Component } from 'react';
import '../css/Nav.css';

const navList = [
    {pageWay: '#', pageName: 'Homepage'},
    {pageWay: '#', pageName: 'About Us'},
    {pageWay: '#', pageName: 'For Rent'},
    {pageWay: '#', pageName: 'For Sale'},
    {pageWay: '#', pageName: 'Our Agents'},
    {pageWay: '#', pageName: 'Contact Us'}
];

class Nav extends Component{ 
    constructor(props) {
        super(props);
        this.state = {style: {textDecoration: 'none'}};

        this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
        console.log('Mount');
    }

    onMouseOutHandler() {
        this.setState({style: {textDecoration: 'none'}});
        console.log('OFF');
    }

    onMouseOverHandler() {  
        this.setState({style: {textDecoration: 'underline'}});
        console.log('ON');
    }

    render() {
        console.log(4);
        return (
            <div>
                <nav>
                    <ul className='menu'>
                        {navList.map(element =>
                            <li key={element.pageName}>
                                {console.log('el')}
                                <a href={element.pageWay} style={this.state.style}
                                onMouseOut={this.onMouseOutHandler}
                                onMouseOver={this.onMouseOverHandler}>
                                {element.pageName}</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;