import React, { Component } from 'react';
import './section1.css';
import logo from '../../../Docplanner-files/sygnet.png'

class Section1 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="all-section1">
			  <img className="logo" src={logo}/>
		
		      <h1 class="h1center">
			  Making the healthcare experience more human
		     </h1>
		     <div class="colones2">
		    	<div class="colone">
				<p>
					We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
				</p>
		    	</div>
		    	<div class="colone">
				<p>
					We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
				</p>
			    </div>
		     </div>
           </div>
         );
    }
}
 
export default Section1;