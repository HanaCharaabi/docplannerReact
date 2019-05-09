import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    state = {  }
    render() { 
        return (
            
<footer className="main-footer">
	<div className="div-main-footer">
		<p>We are leaders in 10 countries:
			<a href="https://www.znanylekarz.pl/" >Poland</a>,
            <a href="https://www.doktortakvimi.com/" target="_blank">Turkey</a>,
			<a href="https://www.doctoralia.es/" >Spain</a>,
			<a href="https://www.miodottore.it/" >Italy</a>,
			<a href="https://www.znamylekar.cz/" >Czech Republic</a>,
			<a href="https://www.doctoralia.com.mx/" >Mexico</a>,
			<a href="https://www.doctoralia.co/" >Colombia</a>,
			<a href="http://www.doctoralia.com.br/" >Brazil</a>,
			<a href="http://www.doctoraliar.com/" >Argentina</a>
			and
			<a href="http://www.doctoralia.cl/" >Chile</a>
		</p>
		<p className="B-copy-R">This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
     <p className="copy-R">www.docplanner.com © 2019</p>
	</div>
</footer>

          );
    }
}
 
export default Footer;