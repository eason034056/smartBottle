import React, {useEffect} from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import "../Team.css";

const TeamMember = ({ delay, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const props = useSpring({
    from: {
      transform: "translateX(-100%)",
      filter: "blur(5px)", // 动画开始时模糊效果为5px
    },
    to: {
      transform: inView ? "translateX(0)" : "translateX(-100%)",
      filter: inView ? "blur(0px)" : "blur(5px)", // 元素可见时模糊效果为0，不可见时为5px
    },
    delay: inView ? delay : 0,
    config: { duration: 300 },
  });

  return (
    <animated.div ref={ref} style={props}>
      {children}
    </animated.div>
  );
};

const Team = () => {
  return (
    <div className="team-container">
      <h1 className="team-title">
        Team <br /> Members
      </h1>
      <TeamMember delay={0}>
        <div className="team-member">
        <img src={`${process.env.PUBLIC_URL}/pictures/members/member1.jpg`} alt="member1-image" />
          <h1>吳雨森</h1>
          <p>IEEM 1</p>
        </div>
      </TeamMember>
      <TeamMember delay={200}>
        <div className="team-member">
        <img src={`${process.env.PUBLIC_URL}/pictures/members/member2.jpg`} alt="member2-image" />
          <h1>楊子頤</h1>
          <p>CS 4</p>
        </div>
      </TeamMember>
      <TeamMember delay={400}>
        <div className="team-member">
        <img src={`${process.env.PUBLIC_URL}/pictures/members/member3.jpg`} alt="member3-image" />
          <h1>彭鈺婷</h1>
          <p>JITA 3</p>
        </div>
      </TeamMember>
    </div>
  );
};

export default Team;
