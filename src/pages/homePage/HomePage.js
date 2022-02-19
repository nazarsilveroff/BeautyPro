import React from "react";
import Features from "../../components/sectonsHomePage/features/Features";
import Feedback from "../../components/sectonsHomePage/feedback/Feedback";

import Hero from "../../components/sectonsHomePage/hero/Hero";
// import Members from "../../components/sectonsHomePage/members/Members";
// import Partners from "../../components/sectonsHomePage/partners/Partners";
import Works from "../../components/sectonsHomePage/works/Works";
const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Works />
      {/* <Members /> */}
      {/* <Partners /> */}
      <Feedback />
    </>
  );
};

export default HomePage;
