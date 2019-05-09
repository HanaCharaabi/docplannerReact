import React, { Component } from 'react';
import './main.css';
import Section1 from'./section1/section1.js';
import Section2 from'./section2/section2.js';
import Section3 from'./section3/section3.js';
import Section4 from'./section4/section4.js';
import Section5 from'./section5/section5.js';


class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="all-main">
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
            </div>
         );
    }
}
 
export default Main;