import styled from "styled-components";

export const GalleryImage = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 287px;

  @media (min-width: 768px) {
    height: 364px;
  }
  @media (min-width: 1024px) {
    height: 320px;
  }
`;

export const GalleryContainer = styled.section`
  margin-bottom: 50px;
  .projects-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gallery__list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: -30px;
    margin-left: -30px;
  }
  .gallery__item {
    margin-bottom: 30px;
    margin-left: 30px;
    background: #fff;
    border: 1px solid #eee;
  }
  .gallery__link {
    width: 287px;
  }
  .text-container {
    padding: 20px 24px;
  }
  .title {
    font-weight: 700;
    font-size: 18px;
    line-height: 2;
    letter-spacing: 0.06em;
    color: var(--title-text-color);
  }
  .text {
    font-weight: 400;
    font-size: 16px;
    line-height: 1.87;
    color: var(--primary-text-color);
  }

  @media (min-width: 768px) {
    .gallery__link {
      width: 364px;
    }
  }
  @media (min-width: 1024px) {
    .gallery__link {
      width: 320px;
    }
  }
  /* @media (min-width: 768px) and (max-width: 1199px) {
    .gallery__link {
      width: 768px;
    }
  } */

  /* @media (min-width: 768px) and (max-width: 1199px) {
    .gallery__link {
      width: 345px;
    }
  } */
  /* @media (min-width: 1200px) {
    .gallery__link {
      width: 370px;
    }
  }  */
  .gallery__link:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .gallery__link:hover {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  /* .project-cards a:hover .image-container::before {
    transform: translateY(0);
  }
  .project-cards a:hover .overlay-block {
    transform: translateY(0);
  } */

  /* .project-cards img:hover {
    transform: scale(1.05);
  } */

  /* .image-container {
    position: relative;
    overflow: hidden;
  }
  .image-container::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(33, 150, 243, 0.9);
    transform: translateY(100%);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .overlay-block {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 63px 24px;
    transform: translateY(100%);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .overlay-text {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.56;
    letter-spacing: 0.03em;
    color: #fff;
  } */
`;
