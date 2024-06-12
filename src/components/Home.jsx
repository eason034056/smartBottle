import React, {useEffect} from "react";
import { useSpring, animated } from "react-spring";
import About from "./About";
import "../Home.css";

const Home = () => {
  const fadeInUp = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  const fadeInSpan = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 1000 },
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="big-container">
      <div className="container">
        <div className="home">
          <animated.h1 style={fadeInUp} className="health">
            Redefine
            <br />
            Your
            <br />
            Hidration.
            <animated.span style={fadeInSpan} id="health-span">
              <br />
              with every sip made smart.
            </animated.span>
          </animated.h1>
          <div className="circle"></div>
          <img src={`${process.env.PUBLIC_URL}/pictures/home-pic.png`} alt="bottle" />
        </div>
      </div>
    </div>
  );
};

export default Home;
