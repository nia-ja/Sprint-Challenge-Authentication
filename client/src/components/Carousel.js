import React, { Component } from 'react';
import { CarouselComp, CarouselItem } from '../styles/';


export default class Carousel extends Component {
  constructor(props){
    super(props);
    // this.checkKey = this.checkKey.bind(this);
    this.state = {
      currentIndex: 0
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.checkKey.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.checkKey.bind(this));
  }
  leftClick = () => {
    if (this.state.currentIndex === 0) {
      const lastSlide = this.props.jokes.length - 1;
      this.setState({currentIndex: lastSlide})
    } else {
      const prevSlide = this.state.currentIndex - 1;
      this.setState({currentIndex: prevSlide})
    }
  }

  rightClick = () => {
    const lastSlide = this.props.jokes.length - 1;
    if (this.state.currentIndex === lastSlide) {
      this.setState({currentIndex: 0})
    } else {
      const nextSlide = this.state.currentIndex + 1;
      this.setState({currentIndex: nextSlide})
    }
  }

  selectedImage = (index) => {
      if(this.props.jokes.length) {
        return (
            <CarouselItem>
                <p>{this.props.jokes[index].joke}</p>
            </CarouselItem>
        )
      } else {
          return (
            <CarouselItem>
                <p>No jokes today</p>
            </CarouselItem>
          )
      }
  }

  checkKey = e => {
    console.log(e.keyCode);
    if (e.keyCode === 37) {
       // left arrow
       this.leftClick();
    } else if (e.keyCode === 39) {
       // right arrow
       this.rightClick();
    }
}
  
  render(){
      //{window.onKeyPress={this.checkKey}}
    return (
      <CarouselComp>
        <div className="left-button" onClick={this.leftClick} /*onKeyPress={this.checkKey}*/>{"<"}</div>
        {this.selectedImage(this.state.currentIndex)}
        <div className="right-button" onClick={this.rightClick} /*onKeyPress={this.checkKey}*/>{">"}</div>
      </CarouselComp>
    )
  }
}