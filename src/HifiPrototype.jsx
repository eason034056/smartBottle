import React, { useState } from "react";
import "./HifiPrototype.css";

const HifiPrototype = () => {

return (
    <div className="hifi-container">
        <h1>Hi-fidelity Prototype</h1>
        <div className="hifi-details">
            <h2>價值主張</h2>
            <h3>如何鼓勵人們多喝水</h3>
            <ul>
                <li>建立智能水壺與應用程式</li>
                <li>實時追蹤飲水量，及時提醒飲水</li>
                <li>設計遊戲與挑戰，讓喝水變得有趣</li>
                <li>通過遊戲激勵機制提高日常飲水量</li>
                <li>完成挑戰，與好友在社群媒體上分享成就</li>
            </ul>
        </div>
        <div className="hifi-details">
            <h2>議題</h2>
            <ul>
                <li>現代人普遍缺乏足夠的飲水量</li>
                <li>如何將飲水與遊戲結合，提高使用者的參與度和積極性</li>
                <li>智能裝置對於健康行為的影響及其利用</li>
            </ul>
        </div>
        <div className="hifi-details">
            <h2>目標使用者</h2>
            <ul>
                <li>注重健康想要增加飲水但時常忘記的人</li>
                <li>健身愛好者</li>
                <li>想改善飲水習慣的人</li>
                <li>所有日常飲水量低於標準目標值的人</li>
            </ul>
        </div>
        <div className="hifi-details">
            <h2>使用者需求</h2>
            <ul>
                <li>希望有持續的動力可以保持飲水習慣</li>
                <li>希望有統計圖表可以知道自己的飲水狀況</li>
                <li>簡單易用的應用程式界面，不需要額外花心思紀錄飲水量</li>
            </ul>
        </div>
        <div className="hifi-details">
            <h2>產品亮點</h2>
            <ul>
                <li>智能水壺與應用程式整合，不須手動紀錄飲水量</li>
                <li>貓咪養成之互動式遊戲提供持續飲水的動力</li>
                <li>個人飲水統計圖方便觀察特定時段內飲水狀況以及連續達成飲水目標之天數</li>
            </ul>
        </div>
        <div className="hifi-details">
            <h2>Demo Video</h2>
            <iframe width="700" height="500" src="https://www.youtube.com/embed/WdT-MdglecQ?si=y05YNsOXdl-JY_mV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        
    </div>
  );
};

export default HifiPrototype;