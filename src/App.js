import React, { useState, useEffect } from "react";
import useMousePosition from "./hooks/useMousePosition";
import Banner from "./components/banner";
import Cursor from "./components/cursor";

import getCursorProps from "./getCursorProps";
import "./styles.scss";

export default function App() {
  const [bannerElements, setBannerElements] = useState({});
  const mousePosition = useMousePosition();
  const [cursorProps, setCursorProps] = useState({
    videoID: null,
    scale: 1
  });

  useEffect(() => {
    setCursorProps(getCursorProps(bannerElements, mousePosition));
  }, [bannerElements, mousePosition]);

  return (
    <div>
      <Banner setBannerElements={setBannerElements} />
      <Cursor cursorProps={cursorProps} />  
    </div>
  );
}
