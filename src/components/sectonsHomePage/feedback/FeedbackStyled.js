import styled from "styled-components";
export const PersonImg = styled.div`
  background-image: url(${({ src }) => src});
  background-position: auto;
  background-size: cover;
  background-repeat: no-repeat;
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
export const FeedbackWrapper = styled.div`
  padding-bottom: 30px;
  .feetback {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    /* padding: 20px 0; */
  }
  .person-box {
  }

  .person-name {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.14;
    color: var(--title-text-color);
    margin-bottom: 10px;
    letter-spacing: 0.03em;
    text-align: center;
  }

  .comment-box {
    border-radius: 10px;
    background-color: #afb1b829;
    padding: 10px;
    /* margin-bottom: 10px; */
    max-height: 120px;
    overflow: scroll;

    ::-webkit-scrollbar {
      width: 4px;
      height: 0;
      border-radius: 4px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--accent-text-color);
      border-radius: 4px;
      height: 15px;
    }

    ::-webkit-scrollbar-thumb:hover {
      /* background-color: var(--btn-bg-color); */
      background-color: transparent;
    }
  }
  .comment-text {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.71;
    color: var(--primary-text-color);
  }
  .location-box {
  }
  .location-text {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.14;
    color: var(--title-text-color);
    letter-spacing: 0.03em;
    text-align: center;
  }
  @media all and (min-width: 1024px) {
    .person-img {
      max-width: 150px;
    }
    .comment-text {
      font-size: 18px;
    }
  }

  .awssld__container figure,
  .awssld__content,
  .awssld__box {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .awssld__controls button,
  .awssld__bullets button {
    outline-color: 0;
    outline-style: none;
    outline-width: 0;
  }

  .awssld {
    --organic-arrow-thickness: 4px;
    --organic-arrow-height: 40px;
    --slider-height-percentage: 35%;
    --loader-bar-color: #851515;
    --loader-bar-height: 6px;
    --control-button-width: 10%;
    --control-button-height: 25%;
    --control-button-opacity: 0.5;
    --control-button-hover-opacity: 0.75;
    --control-button-background: transparent;
    --transition-bezier: cubic-bezier(0.5, 0.075, 0.25, 0.95);
    --slider-transition-duration: 575ms;
    --organic-arrow-color: #fd9fb5;
    --organic-arrow-border-radius: 0;
    --control-bullet-color: #afb1b8;
    --control-bullet-active-color: #fd9fb5;
    --content-background-color: #2f2f2f;
  }

  .awssld {
    display: block;
    position: relative;
    width: 100%;
    max-width: 100%;
  }

  .awssld__wrapper {
    display: block;
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .awssld__container {
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: var(--slider-height-percentage);
  }

  @media all and (max-width: 500px) {
    .awssld__container {
      padding-bottom: calc(var(--slider-height-percentage) * 3);
    }
    .feetback {
      width: 90%;
    }
  }

  .awssld__startUp {
    background-color: red;
    height: 100%;
    width: 100%;
  }

  .awssld__startUp > div {
    height: 100%;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .awssld__startUp img {
    width: 35%;
    height: auto;
  }

  .awssld__content {
    /* border: red 3px solid; */
    /* background-color: var(--content-background-color); */
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .awssld__content > img,
  .awssld__content > video {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .awssld__controls button {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: var(--control-button-width);
    height: var(--control-button-height);
    position: absolute;
    z-index: 10;
    top: calc(50% - (0.5 * var(--control-button-height)));
    border: none;
    background-color: var(--control-button-background);
    color: #fff;
    cursor: pointer;
  }

  .awssld__controls button .awssld__controls__arrow-left,
  .awssld__controls button .awssld__controls__arrow-right {
    opacity: var(--control-button-opacity);
  }

  .awssld__controls button:hover .awssld__controls__arrow-left,
  .awssld__controls button:hover .awssld__controls__arrow-right {
    opacity: var(--control-button-opacity-hover);
  }

  .awssld__controls--active .awssld__controls__arrow-left {
    opacity: var(--control-button-opacity-hover);
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .awssld__controls--active .awssld__controls__arrow-right {
    opacity: var(--control-button-opacity-hover);
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  .awssld__controls--hidden {
    display: none;
  }

  @media all and (max-width: 520px) {
    .awssld__controls {
      visibility: hidden;
    }
  }

  .awssld__bar {
    display: block;
    width: 100%;
    height: var(--loader-bar-height);
    background-color: var(--loader-bar-color);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    -webkit-transition: -webkit-transform 3000ms var(--transition-bezier);
    transition: -webkit-transform 3000ms var(--transition-bezier);
    transition: transform 3000ms var(--transition-bezier);
    transition: transform 3000ms var(--transition-bezier),
      -webkit-transform 3000ms var(--transition-bezier);
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .awssld__bar--active {
    -webkit-transform: translate3d(-20%, 0, 0);
    transform: translate3d(-20%, 0, 0);
  }

  .awssld__bar--end {
    -webkit-transition-duration: 300ms;
    transition-duration: 300ms;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .awssld__next {
    right: 0;
  }

  .awssld__prev {
    left: 0;
  }

  .awssld__box {
    z-index: 1;
    visibility: hidden;
  }

  .awssld--animated {
    will-change: transform;
    visibility: visible;
  }

  .awssld--animated-mobile {
    will-change: transform;
    -webkit-transition: -webkit-transform 325ms cubic-bezier(0.15, 0.65, 0.1, 1);
    transition: -webkit-transform 325ms cubic-bezier(0.15, 0.65, 0.1, 1);
    transition: transform 325ms cubic-bezier(0.15, 0.65, 0.1, 1);
    transition: transform 325ms cubic-bezier(0.15, 0.65, 0.1, 1),
      -webkit-transform 325ms cubic-bezier(0.15, 0.65, 0.1, 1);
  }

  .awssld--active {
    visibility: visible;
    z-index: 2;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .awssld--moveRight,
  .awssld--moveLeft {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .awssld--moveRight {
    -webkit-animation: slideFromRight var(--slider-transition-duration) both
      var(--transition-bezier);
    animation: slideFromRight var(--slider-transition-duration) both
      var(--transition-bezier);
  }

  .awssld--moveLeft {
    -webkit-animation: slideFromLeft var(--slider-transition-duration) both
      var(--transition-bezier);
    animation: slideFromLeft var(--slider-transition-duration) both
      var(--transition-bezier);
  }

  .awssld--exit {
    z-index: 0;
  }

  .awssld--exit.awssld--moveLeft {
    -webkit-animation: slideToLeft var(--slider-transition-duration) both
      var(--transition-bezier);
    animation: slideToLeft var(--slider-transition-duration) both
      var(--transition-bezier);
  }

  .awssld--exit.awssld--moveRight {
    -webkit-animation: slideToRight var(--slider-transition-duration) both
      var(--transition-bezier);
    animation: slideToRight var(--slider-transition-duration) both
      var(--transition-bezier);
  }

  .awssld--first .awssld__prev {
    visibility: hidden;
  }

  .awssld--last .awssld__next {
    visibility: hidden;
  }

  .awssld--fill-parent {
    position: absolute !important;
    width: 100% !important;
    height: 100% !important;
    top: 0;
    left: 0;
  }

  .awssld--fill-parent .awssld__container {
    height: 100%;
    padding: 0;
  }

  .awssld__bullets {
    position: absolute;
    bottom: -20px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .awssld__bullets button {
    padding: 0;
    display: block;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 50%;
    background: var(--control-bullet-color);
    text-indent: -9999px;
    overflow: hidden;
    cursor: pointer;
    border: none;
    -webkit-transition: background-color 0.175s ease-out,
      -webkit-transform 0.225s cubic-bezier(0.8, 1.35, 0.75, 1.45);
    transition: background-color 0.175s ease-out,
      -webkit-transform 0.225s cubic-bezier(0.8, 1.35, 0.75, 1.45);
    transition: transform 0.225s cubic-bezier(0.8, 1.35, 0.75, 1.45),
      background-color 0.175s ease-out;
    transition: transform 0.225s cubic-bezier(0.8, 1.35, 0.75, 1.45),
      background-color 0.175s ease-out,
      -webkit-transform 0.225s cubic-bezier(0.8, 1.35, 0.75, 1.45);
  }

  .awssld__bullets button:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .awssld__bullets .awssld__bullets--loading {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .awssld__bullets .awssld__bullets--active {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    background: var(--control-bullet-active-color);
  }

  .awssld__bullets .awssld__bullets--active:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }

  .awssld__controls__arrow-left,
  .awssld__controls__arrow-right {
    width: 100%;
    height: var(--organic-arrow-height);
    position: relative;
    display: block;
    -webkit-transition: opacity 0.2s ease-out,
      -webkit-transform 0.2s ease-out 0.125s;
    transition: opacity 0.2s ease-out, -webkit-transform 0.2s ease-out 0.125s;
    transition: transform 0.2s ease-out 0.125s, opacity 0.2s ease-out;
    transition: transform 0.2s ease-out 0.125s, opacity 0.2s ease-out,
      -webkit-transform 0.2s ease-out 0.125s;
  }

  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-right:before,
  .awssld__controls__arrow-right:after {
    content: " ";
    position: absolute;
    right: calc(
      50% -
        (
          0.7071 *
            (var(--organic-arrow-height) + var(--organic-arrow-thickness))
        ) / 2
    );
    height: 100%;
    border-radius: var(--organic-arrow-border-radius);
    width: var(--organic-arrow-thickness);
    background-color: var(--organic-arrow-color);
    -webkit-transition: background-color 0.15s ease-out,
      -webkit-transform 0.15s ease-out;
    transition: background-color 0.15s ease-out,
      -webkit-transform 0.15s ease-out;
    transition: transform 0.15s ease-out, background-color 0.15s ease-out;
    transition: transform 0.15s ease-out, background-color 0.15s ease-out,
      -webkit-transform 0.15s ease-out;
  }

  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-right:before {
    -webkit-transform-origin: 100% 100% 0;
    transform-origin: 100% 100% 0;
    top: -50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .awssld__controls__arrow-left:after,
  .awssld__controls__arrow-right:after {
    -webkit-transform-origin: 100% 0% 0;
    transform-origin: 100% 0% 0;
    top: 50%;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .awssld__controls__arrow-right--active {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  .awssld__controls__arrow-right--active:after {
    -webkit-transform: rotate(90deg) translate3d(50%, 0, 0) !important;
    transform: rotate(90deg) translate3d(50%, 0, 0) !important;
  }

  .awssld__controls__arrow-right--active:before {
    -webkit-transform: rotate(-90deg) translate3d(50%, 0, 0) !important;
    transform: rotate(-90deg) translate3d(50%, 0, 0) !important;
  }

  .awssld__controls__arrow-left:before,
  .awssld__controls__arrow-left:after {
    right: auto;
    left: calc(
      50% -
        (
          0.7071 *
            (var(--organic-arrow-height) + var(--organic-arrow-thickness))
        ) / 2
    );
  }

  .awssld__controls__arrow-left:before {
    -webkit-transform-origin: 0 100% 0;
    transform-origin: 0 100% 0;
    top: -50%;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .awssld__controls__arrow-left:after {
    -webkit-transform-origin: 0 0 0;
    transform-origin: 0 0 0;
    top: 50%;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .awssld__controls__arrow-left--active {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  .awssld__controls__arrow-left--active:after {
    -webkit-transform: rotate(-90deg) translate3d(-50%, 0, 0) !important;
    transform: rotate(-90deg) translate3d(-50%, 0, 0) !important;
  }

  .awssld__controls__arrow-left--active:before {
    -webkit-transform: rotate(90deg) translate3d(-50%, 0, 0) !important;
    transform: rotate(90deg) translate3d(-50%, 0, 0) !important;
  }

  .awssld__controls button:hover .awssld__controls__arrow-left:before {
    opacity: 1;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
  }

  .awssld__controls button:hover .awssld__controls__arrow-left:after {
    opacity: 1;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }

  .awssld__controls button:hover .awssld__controls__arrow-right:before {
    opacity: 1;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }

  .awssld__controls button:hover .awssld__controls__arrow-right:after {
    opacity: 1;
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
  }

  .awssld__timer {
    --timer-delay: 2000ms;
    --timer-release: 200ms;
    --timer-height: 4px;
    --timer-background-color: rgba(0, 0, 0, 0.15);
    width: 100%;
    height: var(--timer-height);
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    /* display: none; */
  }

  .awssld__timer--animated {
    will-change: transform;
    -webkit-transition: -webkit-transform var(--timer-delay) linear;
    transition: -webkit-transform var(--timer-delay) linear;
    transition: transform var(--timer-delay) linear;
    transition: transform var(--timer-delay) linear,
      -webkit-transform var(--timer-delay) linear;
  }

  .awssld__timer--run {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  .awssld__timer--fast {
    -webkit-transition: -webkit-transform calc(var(--timer-release) / 2) linear;
    transition: -webkit-transform calc(var(--timer-release) / 2) linear;
    transition: transform calc(var(--timer-release) / 2) linear;
    transition: transform calc(var(--timer-release) / 2) linear,
      -webkit-transform calc(var(--timer-release) / 2) linear;
    -webkit-transform: translateX(-0.00001px);
    transform: translateX(-0.00001px);
  }

  .awssld__timer--end {
    -webkit-transform: translateX(-0.0001px);
    transform: translateX(-0.0001px);
    -webkit-transition: -webkit-transform var(--timer-release) linear;
    transition: -webkit-transform var(--timer-release) linear;
    transition: transform var(--timer-release) linear;
    transition: transform var(--timer-release) linear,
      -webkit-transform var(--timer-release) linear;
  }

  .awssld__timer--hidden {
    display: none;
  }

  @-webkit-keyframes slideFromLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideFromLeft {
    from {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @-webkit-keyframes slideFromRight {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideFromRight {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @-webkit-keyframes slideToLeft {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes slideToLeft {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @-webkit-keyframes slideToRight {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  @keyframes slideToRight {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }
`;