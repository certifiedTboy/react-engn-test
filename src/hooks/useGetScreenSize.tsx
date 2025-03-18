import { useState, useEffect } from "react";

const useGetScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isOnMobile, setIsOnMobile] = useState<boolean>(false);

  const handleResize = (innerWidth: number) => {
    setWidth(innerWidth);
  };

  useEffect(() => {
    if (width <= 693) {
      setIsOnMobile(true);
    } else {
      setIsOnMobile(false);
    }
  }, [width]);

  return { handleResize, isOnMobile };
};

export default useGetScreenSize;
