import '../App.css';
import './HeroSection.css';
import React, { Component } from 'react'

export default class HeroSection extends Component {
    render() {
        
        let background;
        if (this.props.image != null) {
            background = <img src={this.props.image} alt=""/>;
        } else if (this.props.video != null) {
            background = <video src={this.props.video} autoPlay loop muted />;
        } else {
            background = <video src="intro.mp4" autoPlay loop muted />
        }
        console.log(background)
        return (
            <div className='hero-container'>
                {background}
                

                <h1 class="entry-title">{this.props.title}</h1>
                
                <p>{this.props.paragraph}</p>
                
            </div>
        )
    }
}

