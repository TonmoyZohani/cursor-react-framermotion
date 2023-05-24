import { useState, useEffect } from "react";

const useMousePosition = () => {
  let [mousePosition, setMousePosition] = useState({ x: null, y: null });
  function handleMouseMove(e) {
    setMousePosition({ x: e.pageX, y: e.pageY });
  }
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePosition;
};

export default useMousePosition;
