import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Filter from "../../components/sectionPortfolioPage/filter/Filter";
import Gallery from "../../components/sectionPortfolioPage/gallery/Gallery";

const PortfolioPage = () => {
  // const [items, setItems] = useState(null);
  // const getPlaces = useCallback(async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://beautyprocms.herokuapp.com/places`
  //     );
  //     setItems(data);
  //   } catch (error) {}
  // }, []);
  //
  // useEffect(() => {
  //   getPlaces();
  // }, []);

  return (
    <>
      <Filter />
      <Gallery />
    </>
  );
};

export default PortfolioPage;
