import React from "react";
import "./Needfinding.css";

const Needfinding = () => {
  return (
    <div className="needfinding-container">
      <section>
        <div className="section1-left">
          <h1>Needfinding</h1>
          <ul>
            <li>全面了解用戶的生活習慣與健康意識</li>
            <li>
              關注用戶的飲水量、飲水時機以及對飲水量與健康關係的看法，以了解目標市場在飲水習慣上的具體需求和潛在問題
            </li>
            <li>瞭解用戶對水壺的使用偏好和需求</li>
            <li>考量環保因素和健康監控需求</li>
            <li>了解智能水壺在增加用戶間互動以及提供個性化體驗方面的潛力</li>
          </ul>
        </div>
        <div className="section1-right">
          <img
            src="https://cdn4.iconfinder.com/data/icons/essentials-74/24/002_-_Search-256.png"
            alt="find-icon"
          />
        </div>
      </section>
      <section className="green">
        <div className="section2-left">
          <h1>訪談大綱</h1>
        </div>
        <div className="section2-right">
          <ul>
            <li>背景資料</li>
            <li>日常生活和健康習慣</li>
            <li>飲水習慣</li>
            <li>水壺使用調查</li>
            <li>健康監控的app使用調查</li>
            <li>使用智慧穿戴式裝置之習慣調查</li>
            <li>遊戲調查</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="section3-left">
          <h1>Affinity Diagram</h1>
          <p>訪談人數: 5人</p>
          <p>訪談條件: 想建立喝水習慣，卻時常忘記的人</p>
        </div>
        <div className="section3-right">
          <div className="affinity-diagram-button">
            <a href="https://www.canva.com/design/DAGAaXN1czc/ZREDWOqLkv7vCv2N9aCBiQ/view?utm_content=DAGAaXN1czc&utm_campaign=designshare&utm_medium=link&utm_source=editor">
              <img
                src="https://cdn.sanity.io/images/599r6htc/localized/d8c514cd994f919b306f8a9acfe58c801211ac16-1108x1108.png"
                alt="affinity-Diagram"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="orange">
        <div className="section4-left">
          <a href="https://drive.google.com/file/d/1rLBtfZQDnzzEIRFYYgY4kOuJAjqTkTzF/view?usp=sharing">
            <div className="empathy-map-button">會主動喝水的人</div>
          </a>
          <a href="https://drive.google.com/file/d/1vjK1OdPrqVAb2_eZX6bdtwS9PWecLKA8/view?usp=sharing">
            <div className="empathy-map-button">想到才喝水的人</div>
          </a>
        </div>
        <div className="section4-right">
          <h1>Empathy map</h1>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Needfinding;
