import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoadingScreen = () => {
  const loadingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      loadingRef.current,
      { rotation: 0 },
      { rotation: 360, duration: 2, repeat: -1, ease: "none" }
    );
  }, []);

  return (
    <div ref={loadingRef}>
      {/* Your loading screen content */}
    </div>
  );
};

export default LoadingScreen;