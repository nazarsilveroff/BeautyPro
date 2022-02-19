import React from "react";
import { GalleryContainer, GalleryImage } from "./GalleryStyle";
import { Link, useLocation } from "react-router-dom";
import {galleryItems} from "../../../data/gallery-items";


const Gallery = () => {
   const items = galleryItems
  const queryParams = new URLSearchParams(useLocation().search);
  const filteredGalleryItems = queryParams.has("filterBy")
    ? items?.filter((item) => item?.filter === queryParams.get("filterBy"))
    : items;

  return (
    <GalleryContainer>
      <div className="container projects-container">
        <ul className="gallery__list">
          {filteredGalleryItems?.map((item) => (
            <li key={item.id} className="gallery__item">
              <Link
                to={{
                  pathname: `/salon/${item.id}`,
                  state: {
                    from: `/school`,
                  },
                }}
                className="gallery__link"
              >
                <GalleryImage image={item.preview} />
                <div className="text-container">
                  <h3 className="title">{item.name}</h3>
                  <p className="text">{item.title}</p>
                  <p className="text">{item.price}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </GalleryContainer>
  );
};

export default Gallery;
