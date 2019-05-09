import React, { Component } from 'react';
import './section4.css';
import img1 from "../../../Docplanner-files/flag.png";
import img2 from "../../../Docplanner-files/visits.png" ;
import img3 from "../../../Docplanner-files/patients.png";
import img4 from "../../../Docplanner-files/doctors.png";


class Section4 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="all-section4">
			 <div className="sec4-div1">
					<h1>
						The world's
						<br/>biggest healthcare platform
					</h1>
					<p>
						We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
					</p>
			</div>

			<div className="sec4-div2">
				<div className="sec4-div2-1">
					<div className="sec4-div2-11">
										<img src={img1} />
										<h3>Leader in 10&nbsp;countries</h3>
										<p>
											Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile
										</p>
					</div>

					  <div className="sec4-div2-11">
										<img src={img2}/>
										<h3>1 million appointments</h3>
										<p>
											booked last month
										</p>
					  </div>

				</div>

				<div className="sec4-div2-2">
						<div className="sec4-div2-11">
										<img src={img3} />
										<h3>30 million unique patients</h3>
										<p>
											visit us every month
										</p>
						</div>
							<div className="sec4-div2-11">
										<img src={img4} />
										<h3>2 million active doctors</h3>
										<p>
											trust
											in&nbsp;our solutions
										</p>
							</div>
					</div>
				</div>
           </div>
         );
    }
}
 
export default Section4;