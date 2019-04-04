import React, { Component } from 'react';
import './Local.css';
let local =[
    { text:'znanylekarz' },{ text:'doctoralia' },{ text:'miodottore' },{ text:'doktortakvimi' },{ text:'znamylekar' }
]
class Local extends Component {
    render() {
      return (
      <div className="local">
      <h1>We are a global<br/>company <br />
            with local culture</h1>
       <div className="links">
    {local.map((el)=>
        <a href="">     
        <span>{el.text}</span>
        </a>
        )}
       </div>     

      </div>
      );
    }
  }
  
  export default Local;
  