import React from "react";
import sprite from "../../../../images/icons-defs.svg";
const IconList = () => {
  return (
    <ul className="icon-list">
      <li>
        <a href="true">
          <svg width={20} height={20}>
            <use xlinkHref={sprite + "#icon-instagram"} />
          </svg>
        </a>
      </li>
      <li>
        <a href="true">
          <svg width={20} height={20}>
            <use xlinkHref={sprite + "#icon-facebook"} />
          </svg>
        </a>
      </li>
      <li>
        <a href="true">
          <svg width={20} height={20}>
            <use xlinkHref={sprite + "#icon-twitter"} />
          </svg>
        </a>
      </li>
      <li>
        <a href="true">
          <svg width={20} height={20}>
            <use xlinkHref={sprite + "#icon-linkedin"} />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default IconList;
