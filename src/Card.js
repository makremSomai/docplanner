import React, { Component } from 'react';
import Cardlist from './Cardlist';
import './Card.css';
const list =[
    {img:"https://www.docplanner.com/images/warsaw.png", srcset:"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",
         title:"Warsaw" },
    {img:"https://www.docplanner.com/images/barcelona.png", srcset:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
         title:"Barcelona" },
    {img: "https://www.docplanner.com/images/istanbul.png", srcset:"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",
         title:"Istanbul" },
     {img:"https://www.docplanner.com/images/rome.png", srcset:"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x",
        title:"Rome" },
     {img:"https://www.docplanner.com/images/mexico-city.png", srcset:"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",
          title:"Mexico City" },
     {img:"https://www.docplanner.com/images/curitiba.png", srcset:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",
          title:"Curitiba" },
        ]
class Card extends Component {
    render() {
      return (
      <div className="fullCard">
       {list.map((el)=>
         <Cardlist el={el} Card />
         )}
      </div>
      );
    }
  }
  
  export default Card;