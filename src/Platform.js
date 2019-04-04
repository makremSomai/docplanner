import React, { Component } from 'react';
import './Platform.css';
import Stats from './Stats';
let list=[
{   
    img: "https://www.docplanner.com/img/flag.png", srcset:"https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",
    title:"Leader in 10 countries",
    paragraphe:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile",
},
{
    img: "https://www.docplanner.com/img/patients.png", srcset:"https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x",
    title:"30 million unique patients",
    paragraphe:"visit us every month",   
},
{
    img: "https://www.docplanner.com/img/visits.png", srcset:"https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x",
    title:"1 million appointments",
    paragraphe:"booked last month",   
},
{
    img: "https://www.docplanner.com/img/doctors.png", srcset:"https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x",
    title:"2 million active doctors",
    paragraphe:"trust in our solutions",   
}
]
class Platform extends Component {
  render() {
    return (
    <div className="platform">
            <div className="world">
            <h1> The world's<br/>biggest healthcare platform</h1>
            <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries</p>
            </div>
                <div className="list">
                {list.map((el)=>
                             <Stats el={el} platform />
                                )}
                </div>            
    </div>
    );
  }
}

export default Platform;    