import React, { useState } from "react";
import "./PitchSlide.css";

const PitchSlide = () => {

return (
    <div className="pitch-slide-container">
        <h1>Pitch Slides</h1>
        <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '56.25%', paddingBottom: '0', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
  <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }}
    src="https://www.canva.com/design/DAGHSF_eouE/7drkYtL6mKqax5M2sF6dZQ/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<p>
  Group 3 設計的 <a href="https://www.canva.com/design/DAGHSF_eouE/7drkYtL6mKqax5M2sF6dZQ/view?utm_content=DAGHSF_eouE&utm_campaign=designshare&utm_medium=embeds&utm_source=link" target="_blank" rel="noopener noreferrer">Water Buddy pitch slide</a>
</p>
 </div>
  );
};

export default PitchSlide;