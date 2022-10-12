import { useState, useEffect } from "react";


const useScreenSize = () => {
  const [width, setWidth] = useState(260);
  const [height, setHeight] = useState(360);


  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return { width, height };
};

export default useScreenSize;