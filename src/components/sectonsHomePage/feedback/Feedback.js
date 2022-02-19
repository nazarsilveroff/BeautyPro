import React, { memo, useCallback, useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { FeedbackWrapper, PersonImg } from "./FeedbackStyled";
import {feedbackItems} from "../../../data/feedback-items";
// import axios from "axios";

const Feedback = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  // const [feedback, setFeedback] = useState(null);
  //
  // const getFeedback = useCallback(async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://beautyprocms.herokuapp.com/feedbacks`
  //     );
  //     setFeedback(data);
  //   } catch (error) {}
  // }, []);
  //
  // useEffect(() => {
  //   getFeedback();
  // }, []);

  return (
    <FeedbackWrapper>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={5000}
      >
        {feedbackItems?.map((item) => (
          <div key={item.id}>
            <div className="feetback">
              <div className="person-box">
                <PersonImg
                  className="person-img"
                  src={item.picture}
                />

                <p className="person-name">{item.name}</p>
              </div>
              <div className="comment-box">
                <p className="comment-text">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </FeedbackWrapper>
  );
};

export default memo(Feedback);
