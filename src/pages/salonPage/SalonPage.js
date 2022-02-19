import React, {useCallback, useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {SalonContainer} from "./SalonPageStyle";

import sprite from "../../images/icons-defs.svg";
import Slider from "./slider/Slider";
import axios from "axios";
import {galleryItems} from "../../data/gallery-items";

const SalonPage = () => {
    const {goBack} = useHistory();
    const {itemId} = useParams();
    // const [items, setItems] = useState();

    // const getPlaces = useCallback(async () => {
    //   try {
    //     const { data } = await axios.get(
    //       `https://beautyprocms.herokuapp.com/places`
    //     );
    //     setItems(data);
    //   } catch (error) {}
    // }, []);
    // useEffect(() => {
    //   getPlaces();
    // }, []);

    const images = galleryItems.find((item) => item.id == itemId);

    const hendleBack = () => {
        goBack();
    };
    return (
        <SalonContainer>
            <div className="container salon-container">
                <button className="btn-back" onClick={hendleBack}>
                    <svg className="icon-back">
                        <use xlinkHref={sprite + "#icon-back"}/>
                    </svg>
                </button>
                <div className="salon-content">
                    <div className="sliderWrapper">
                        <Slider images={images.images} id={images.id}/>
                    </div>
                    <a
                        target="_blank"
                        className="button"
                        href="https://n322073.yclients.com/"
                        rel="noreferrer"
                    >
                        Записаться Онлайн
                    </a>
                </div>
            </div>
        </SalonContainer>
    );
};

export default SalonPage;
