import React, { Component } from 'react';
import './Services.css';
import Stats from './Stats';
let services = [{
    title:"For patients",
    paragraphe:"Find a doctor, book a visit and solve any health-related doubt",
    img: "https://www.docplanner.com/img/screen-marketplace@2x.png",
    name: "forpatients",
},
{title:"for doctors",
paragraphe:"Save time managing visits and cut no-shows by half",
img:"https://www.docplanner.com/img/screen-saas@2x.png",
name:"fordoctors",
}



]


class Services extends Component {
  
    render() {
      return (
        <div className="service">
        {services.map((el)=>
                <Stats imgClassName="helloImage" el={el} />)}
         </div>
      );
    }
  }
  
  export default Services ;