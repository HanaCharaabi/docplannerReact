import React, { Component } from 'react';
import './section2.css';
import img1 from '../../../Docplanner-files/screen-marketplace.png';
import img2 from '../../../Docplanner-files/screen-saas.png';

class Section2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="all-section2">
			 			<div class="sec2-div1">
				
                <h4>For patients</h4>
                <h1>Find a doctor, book a visit and solve any health-related doubt</h1>

                <div class="chooses" >
                    
                        <select class="chooses-select" >
                            <option>CHOOSE COUNTRY</option>
                                                                <option value="http://www.doctoraliar.com">Argentina</option>
                                                                <option value="http://www.doctoralia.com.au">Australia</option>
                                                                <option value="http://www.doctoralia.com.br">Brazil</option>
                                                                <option value="http://www.doctoralia.cl">Chile</option>
                                                                <option value="http://www.doctoralia.co">Colombia</option>
                                                                <option value="http://www.znamylekar.cz">Czech</option>
                                                                <option value="http://www.doctoralia-fr.com">France</option>
                                                                <option value="http://www.miodottore.it">Italy</option>
                                                                <option value="http://www.doctoralia.com.mx">Mexico</option>
                                                                <option value="http://www.doctoralia.pe">Peru</option>
                                                                <option value="http://www.znanylekarz.pl">Poland</option>
                                                                <option value="http://www.doctoralia.com.pt">Portugal</option>
                                                                <option value="http://www.doctoralia.es">Spain</option>
                                                                <option value="http://www.doktortakvimi.com">Turkey</option>
                                                                <option value="http://www.doctoralia.co.uk">UK</option>
                        </select>
                        <div class="sec2-div1-img1">
                        <div class="sec2-div1-img2">
                                <img class="sec2-img" src={img1}/>
                            </div>
                        </div>
              </div>
            </div>
                
            <div class="sec2-div2">
                <h4>For doctors</h4>
                <h1>Save time managing visits and cut no-shows by half</h1>
                <div class="chooses">
                <div class="chooses-vide">
                </div>
                <div class="sec2-div1-img1">			
                  <div class="sec2-div1-img2">
                      <img class="sec2-img" src={img2}/>
                  </div>
                </div>
        </div>
    </div>

           </div>
         );
    }
}
 
export default Section2;