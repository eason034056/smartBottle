import React from "react";
import "../About.css"; // 導入CSS樣式

const About = () => {
  return (
    <div className="about">
      <h1 className="title">Features</h1>
      <div className="feature">
        <div className="card">
          <h1>Real-Time Hydration Tracking</h1>
          <p>
            Our smart bottle and app combination revolutionizes the way you
            hydrate by providing real-time data on your daily water intake. This
            ensures you're always aware of how much water you've consumed
            throughout the day, allowing for optimal hydration and health.
          </p>
        </div>
        <div className="card">
          <h1>Engaging Hydration Challenges</h1>
          <p>
            Our smart bottle and app combination revolutionizes the way you
            hydrate by providing real-time data on your daily water intake. This
            ensures you're always aware of how much water you've consumed
            throughout the day, allowing for optimal hydration and health.
          </p>
        </div>
        <div className="card">
          <h1>Social Sharing and Inspiration</h1>
          <p>
            Celebrate your hydration achievements by sharing them on social
            media directly from our app. By posting your progress, you not only
            track your own journey towards a healthier lifestyle but also
            inspire friends and family to prioritize their hydration, creating a
            community of wellness enthusiasts united by the goal of better
            health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
