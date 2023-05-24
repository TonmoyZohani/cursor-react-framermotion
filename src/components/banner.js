import React, { useRef, useEffect } from "react";

const Banner = ({ setBannerElements }) => {
  // const [, setDimensions] = useContext(AppContext);
  const websites = useRef();
  const apps = useRef();
  const branding = useRef();

  useEffect(() => {
    let elements = {
      websites: websites,
      apps: apps,
      branding: branding
    };
    setBannerElements(elements);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-inner">
        <div className="banner-title">
          <h2>The Sister Concern of FlyFar International</h2>
        </div>
        <div className="banner-items-container">
          <div className="banner-item">
            <h1 ref={websites}>Welcome To</h1>
          </div>
          <div className="banner-item">
            <h1 ref={apps}>FlyFar</h1>
          </div>
          <div className="banner-item">
            <h1 ref={branding}>Tech</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
