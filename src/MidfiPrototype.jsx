import React, { useState } from "react";
import "./MidfiPrototype.css";

const MidfiPrototype = () => {

  return (
    <div className="midfi-container">
        <h1>Revised Interface Design & <br></br>Mid-Fi Prototype</h1>
        <div className="midfi-task-detail">
            <h2>Task 1</h2>
            <p>情境: 剛使用智能水壺喝完水後</p>
            <p>任務: 請在使用智能水壺喝水之後，進入app幫我看一下你今天喝了多少毫升的水、拿到了什麼獎勵以及連續幾天完成喝水目標。</p>
            <img src={`${process.env.PUBLIC_URL}/pictures/task1-improvement1.png`} alt="Task Illustration" />
            <img src={`${process.env.PUBLIC_URL}/pictures/task1-improvement2.png`} alt="Task Illustration" />

        </div>
        <div className="midfi-task-detail">
            <h2>Task 2</h2>
            <p>情境: 在飲用 普通水壺的水/手搖杯/湯品 後</p>
            <p>任務: 請你手動紀錄200毫升的飲水量</p>
            <img src={`${process.env.PUBLIC_URL}/pictures/task2-improvement1.png`} alt="Task Illustration" />
            <img src={`${process.env.PUBLIC_URL}/pictures/task2-improvement2.png`} alt="Task Illustration" />
        </div>
        <div className="midfi-task-detail">
            <h2>Task 3</h2>
            <p>情境: 首次下載Water Buddy App</p>
            <p>任務: 請你打開APP完成註冊</p>
            <img src={`${process.env.PUBLIC_URL}/pictures/task3-improvement.png`} alt="Task Illustration" />
        </div>
        <div className="midfi-task-detail">
            <h2>Task 4</h2>
            <p>情境: 得到足夠金錢後，進入虛擬寵物頁面</p>
            <p>任務: 請幫我在遊戲介面中購買貓跳台，並將貓跳台放在沙發的後面</p>
            <img src={`${process.env.PUBLIC_URL}/pictures/task4-improvement.png`} alt="Task Illustration" />
        </div>
        <div className="midfi-task-detail">
            <h2>Mid-Fi Prototype Video</h2>
            <iframe width="700" height="500" src="https://www.youtube.com/embed/2aLeFi0-Eu0?si=bKngliy4cyStYk4r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
  );
};

export default MidfiPrototype;
