import React, { Component } from 'react';
import { CarouselComp, CarouselItem } from '../styles/';


export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentIndex: 0
    }
  }
  componentDidMount() {
    // did user pressed any key
    window.addEventListener('keydown', this.checkKey.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.checkKey.bind(this));
  }
  // fire when left arrow button clicked or left arrow key pressed
  leftClick = () => {
    if (this.state.currentIndex === 0) {
      const lastSlide = this.props.jokes.length - 1;
      this.setState({currentIndex: lastSlide})
    } else {
      const prevSlide = this.state.currentIndex - 1;
      this.setState({currentIndex: prevSlide})
    }
  }
  // fire when right arrow button clicked or right arrow key pressed
  rightClick = () => {
    const lastSlide = this.props.jokes.length - 1;
    if (this.state.currentIndex === lastSlide) {
      this.setState({currentIndex: 0})
    } else {
      const nextSlide = this.state.currentIndex + 1;
      this.setState({currentIndex: nextSlide})
    }
  }

  selectedJoke = (index) => {
      if(this.props.jokes.length) {
        return (
            <CarouselItem>
                <p>{this.props.jokes[index].joke}</p>
            </CarouselItem>
        )
      } else {
          return (
            <CarouselItem>
              {/* TO-DO: Make spinner separate component */}
              <div className="trinity-rings-spinner">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
            </CarouselItem>
          )
      }
  }

  // check if the key pressed by user was left or right arrow
  checkKey = e => {
    if (e.keyCode === 37) {
       // left arrow
       this.leftClick();
    } else if (e.keyCode === 39) {
       // right arrow
       this.rightClick();
    } 
  }
  
  render() {
    return (
      <CarouselComp>
        {this.props.jokes.length > 0 && <div className="left-button" onClick={this.leftClick}>{"<"}</div>}
        {this.selectedJoke(this.state.currentIndex)}
        {this.props.jokes.length > 0 && <div className="right-button" onClick={this.rightClick}>{">"}</div>}
      </CarouselComp>
    )
  }
}