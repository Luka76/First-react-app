import React, { Component } from "react";
import Slider from "react-slick";
import "./SimpleSlider.css";
import commentIcon from "../assets/comment-icon.svg";
import { SliderItems } from "../components/SliderItems";

const clickHandler = () => {
  console.log("komentari");
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          {SliderItems.map((item) => {
            return (
              <div key={item.tag}>
                <div className="slider-image">
                  <img src={item.picture} alt="" />
                  <div className="slider-date">
                    <p>{item.date}</p>
                    <p>
                      <img src={commentIcon} alt="" id="comments" />{" "}
                      {item.commentsNum} Comments
                    </p>
                  </div>
                  <div className="slider-title">
                    <h3>{item.title}</h3>
                  </div>
                  <button className="slider-button" onClick={clickHandler}>
                    Read Article
                  </button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}