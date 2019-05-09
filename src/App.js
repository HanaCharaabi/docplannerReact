import React, { Component } from 'react';
import './App.css';

import Header from'./components/header/header.js'
import Main from'./components/main/main.js'
import Footer from'./components/footer/footer.js'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <Header/>
      <Main/>
      <Footer/>
      </div>
     );
  }
}
 
export default App;