import AwesomeSlider from "react-awesome-slider";
import style from "./slider.module.css";
import React from "react";
const Slider = ({ images,id}) => {

  return (
    <AwesomeSlider cssModule={style}>
      {images.map((image) => <div key={id} data-src={image} /> )}
    </AwesomeSlider>
  );
};

export default Slider;
