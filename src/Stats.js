import React from 'react'
import './Platform.css'
class Stats extends React.Component {

    render() {
        // const {el : {name , title , paragraphe , img} } = this.props
        return (
            <div className={this.props.el.name}>
            {
                this.props.platform && (
            <img className={`${this.props.imgClassName}`} src={this.props.el.img} alt=""></img>

                )
            }
            <h4>{this.props.el.title}</h4>
            <p>{this.props.el.paragraphe}</p>
            {
                !this.props.platform && (
            <img className={`${this.props.imgClassName}`} src={this.props.el.img} alt=""></img>

                )
            }
        </div>
    
        )
    }
}

export default Stats