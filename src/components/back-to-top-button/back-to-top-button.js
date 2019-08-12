import React from 'react';
import { ScrollTo } from "react-scroll-to";

import './back-to-top-button.css';

const BackToTopButton = () => {

  return (
    <ScrollTo>
      {({ scrollTo }) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className="back-to-top" onClick={() => scrollTo(
          {
            x: 500,
            y: 0,
            smooth: true
          })
        }>&uarr;</a>
      )}
    </ScrollTo>
  );
}

export default BackToTopButton;