import React, { Component } from 'react';
import '../css/Nav.css';

class Nav extends Component{ 
    constructor(props) {
        super(props);
        this.navList = [
            {pageWay: '#', pageName: 'Homepage'},
            {pageWay: '#', pageName: 'About Us'},
            {pageWay: '#', pageName: 'For Rent'},
            {pageWay: '#', pageName: 'For Sale'},
            {pageWay: '#', pageName: 'Our Agents'},
            {pageWay: '#', pageName: 'Contact Us'}
        ];

        this.state = {activeElement: undefined};
        
        this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
        // console.log('mount');
    }

    onMouseOutHandler() {
        this.setState({activeElement: undefined});
        // console.log('OFF');
    }

    onMouseOverHandler(event) {  
        this.setState({activeElement: event.target.name});
        // console.log(event.target.name);
    }

    render() {
        // console.log('render');
        return (
            <div>
                <nav>
                    <ul className='menu'>
                        {this.navList.map(el =>
                            <li key={el.pageName}>
                                <a href={el.pageWay}  
                                    style={{textDecoration: this.state.activeElement === el.pageName ? 'underline' : 'none'}}
                                    name={el.pageName}
                                    onMouseOut={this.onMouseOutHandler}
                                    onMouseOver={this.onMouseOverHandler}>
                                        {el.pageName}
                                </a>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;