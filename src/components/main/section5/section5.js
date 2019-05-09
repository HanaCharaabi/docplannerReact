import React, { Component } from 'react';
import './section5.css';
import img1 from "../../../Docplanner-files/Warsaw.png" ;
import img2 from "../../../Docplanner-files/Barcelona.png";
import img3 from "../../../Docplanner-files/Istanbul.png" ;
import img4 from "../../../Docplanner-files/Rome.png" ;
import img5 from "../../../Docplanner-files/Mexico City.png";
import img6 from "../../../Docplanner-files/Curitiba.png";

class Section5 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="all-section5">
                <div class="intro-citys">
		            <h1 class="h1center">
				        Improve the lives of millions.
				        <br/>Change&nbsp;yours forever
			        </h1>
			        <p >
				      More than 1000 team mates share our same vision, goals and passion. 
                        With offices in Warsaw, Barcelona, Istanbul, Rome, Czech Republic,
                     Mexico City, Colombia and Curitiba, our search for great talent never stops.
			        </p>
		        </div>
		        <div class="citys">
			        <div class="cart-image">
						<img src={img1}/>
					
						<div class="city-name">
							Warsaw
							<span class="btn-cart_img">SEE OPENINGS</span>
						</div>
			        </div>

					<div class="cart-image">
						
						<img src={img2} />
						
						<div class="city-name">
							Barcelona
							<span class="btn-cart_img">SEE OPENINGS</span>
						</div>
				    </div>

					<div class="cart-image">
						
						<img src={img3} alt="images" />
						
						<div class="city-name">
							Istanbul
							<span class="btn-cart_img">SEE OPENINGS</span>
						</div>
					
				    </div>
			
					<div class="cart-image">
						<img src={img4} />
						
						<div class="city-name">
							Rome
							<span class="btn-cart_img">SEE OPENINGS</span>
						</div>
			    	</div>

					<div class="cart-image">
						<img src={img5} />
						
						<div class="city-name">
							Mexico City
							<span class="btn-cart_img">SEE OPENINGS</span>
						</div>
				    </div>
					<div class="cart-image">
						
						<img src={img6} />
						
						<div class="city-name">
							Curitiba
							<span class="btn-cart_img">See openings</span>
						</div>
					</div>
				</div>
           </div>
         );
    }
}
 
export default Section5;