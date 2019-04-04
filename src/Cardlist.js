import React, { Component } from 'react';   
import './Cardlist.css';
class Cardlist extends React.Component {

    render() {
        // const {el : {name , title , paragraphe , img} } = this.props
        return (
        <div className="hello">
          
            <div>
            <img className={`${this.props.img}`} src={this.props.el.img} alt=""></img>
            <div className="titleBtn">
                <h4>{this.props.el.title}</h4>
                <button className="btnSeeOpening">see openings</button>
            </div>
            </div>
            
            
            
        </div>
    
        )
    }
}

export default Cardlist;