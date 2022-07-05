import React, { Component } from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import commentIcon from "../assets/comment-icon.svg";
import { SliderItems } from "../components/SliderItems";

const clickHandler = () => {
  console.log("komentari");
};

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {SliderItems.map((item) => {
            return (
              <div key={item.tag}>
                <div className="slider-image">
                  <img src={item.picture} />
                </div>
                <div className="date-div">
                  <p>{item.date}</p>
                  <p>
                    <img src={commentIcon} /> {item.commentsNum} Comments
                  </p>
                </div>
                <div className="title-div">
                  <h3>{item.title}</h3>
                </div>
                <button onClick={clickHandler}>Read Article</button>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
