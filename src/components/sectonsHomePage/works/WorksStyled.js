import styled from "styled-components";
import place1 from "../../../images/kabinet.jpg";
import place2 from "../../../images/mesta.jpg";
import place3 from "../../../images/zal.jpg";
export const WorksContainer = styled.section`
  padding-bottom: 94px;
  .work-list {
    display: flex;
    flex-direction: column;
    /* margin-top: -10px; */
    margin-bottom: -10px;
  }
  .work-item {
    /* margin-top: 10px; */
    margin-bottom: 10px;
  }
  .work-link {
    width: 100%;
    height: auto;
    position: relative;
  }
  .work-image {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 382px;
  }
  .work-image1 {
    background-image: url(${place1});
  }
  .work-image2 {
    background-image: url(${place2});
  }
  .work-image3 {
    background-image: url(${place3});
  }
  .work-content {
    position: absolute;
    bottom: 77px;
    width: 100%;
    bottom: 0;
    padding: 27px;
    /* background: rgba(47, 48, 58, 0.8); */
    background: rgba(255, 165, 186, 0.8);
  }
  .work-title {
    color: var(--btn-bg-color);
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.15;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    .work-list {
      /* flex-direction: row;
      justify-content: space-between; */
    }
    .work-link {
      width: 80%;
      margin: 0 auto;
    }
  }

  @media (min-width: 1023px) {
    .work-list {
      flex-direction: row;
      justify-content: space-between;
    }
    .work-link {
      min-width: 324px;
    }
    .work-image {
      min-height: 324px;
    }
  }
  @media (min-width: 1100px) {
    .work-list {
      justify-content: space-around;
    }
    .work-link {
      min-width: 350px;
    }
    .work-image {
      min-height: 350px;
    }
  }
`;
