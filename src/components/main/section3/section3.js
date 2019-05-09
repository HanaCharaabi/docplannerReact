import React, { Component } from 'react';
import './section3.css';
import img1 from "../../../Docplanner-files/sygnet.png";

class Section3 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="all-section3">
                <div class="sec3-div1">
		            <h1>
		            	We are a global <br/>company
			            <br/>with local culture
		            </h1>
		        </div>

	             <div class="sec3-div2">	
				
						<p class="menu-items-company">
								<img class="logo-sec3"src={img1} />
								<a href="https://www.znanylekarz.pl/" >ZnanyLekarz</a>
						</p>
							<p class="menu-items-company">
									<img class="logo-sec3"src={img1} />
								<a href="https://www.doctoralia.es/" >Doctoralia</a>
							</p>
							<p class="menu-items-company">
									<img class="logo-sec3"src={img1}/>
								<a href="https://www.miodottore.it/" >MioDottore</a>
							</p>
							<p class="menu-items-company">
									<img class="logo-sec3"src={img1} />
								<a href="https://www.doktortakvimi.com/">DoktorTakvimi</a>
							</p>
							<p class="menu-items-company">
									<img class="logo-sec3"src={img1}/>
								<a href="https://www.znamylekar.cz/" >ZnamyLekar</a>
							</p>
				
			       </div>	
           </div>
         );
    }
}
 
export default Section3;