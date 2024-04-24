import React, {useEffect} from "react";
import "./ConceptVideo.css";
import { Link } from "react-router-dom";

const ConceptVideo = () => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);
      
  return (
    <div className="concept-video-container">
        <h1>Concept Video</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LB1tw4RpCKE?si=hocvgiMN-K9nGGYL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div className="concept-video-button-container">
        <div className="concept-video-button">
            <a href="https://www.canva.com/design/DAGDEA9OujA/mgmtZ3Mc_rLnTAa31SWIJA/edit?utm_content=DAGDEA9OujA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
                Brainstorm Tasks
            </a></div>
        <Link to={"/video-storyboard"} className="concept-video-button">Video Storyboard</Link>
      </div>
      
    </div>
  );
};

export default ConceptVideo;
