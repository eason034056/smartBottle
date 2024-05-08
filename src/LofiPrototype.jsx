import React, { useState } from "react";
import "./LofiPrototype.css";

const LofiPrototype = () => {
  // 狀態變量用於控制額外資訊的顯示與隱藏
  const [showDetails, setShowDetails] = useState({
    task1: false,
    task2: false,
    task3: false,
    task4: false
  });

  const toggleShowDetails = (task) => {
    setShowDetails(prevState => ({
      ...prevState,
      [task]: !prevState[task]
    }));
  }

  return (
    <div className="lofi-container">
        <h1>Lo-Fi Prototyping and Test</h1>
        <div className="procedure-div">
            <h1>使用者測試流程</h1>
            <h2>1. 專案介紹：</h2>
            <p>我們開發了一個結合智能水壺的app，app內部有遊戲，在你喝水之後會自動記錄飲水量，你的每一口水都會有相對應得獎勵，獎勵可以在遊戲中使用，如果你不是使用智能水壺補充的水分，也可以在app內以手動的方式紀錄。</p>
            <h2>2. 介紹「放聲思考」：</h2>
            <p>要求參與者在執行任務的同時，將其思考過程口頭表達出來。</p>
            <h2>3. 說明測試方式：</h2>
            <p>
                <li>請你想像這些紙張是手機的介面，你們需要透過操作手機介面來完成上述紙張內的任務</li>
                <li>每個任務都會有一個使用情境，麻煩你根據這個情境以及任務內容思考怎麼透過這個手機介面完成任務</li>
            </p>
        </div>
        <div className="prototyping-video-div">
            <h1>Lo-Fi Prototyping Video</h1>
            <iframe width="700" height="500" src="https://www.youtube.com/embed/hH8MQSusg44?si=J_4swXFyppy8Rs_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/* video */}
        </div>
        <div className="prototype-task-div">
            <h1>測試任務與情境</h1>
            <h2>受測者</h2>
            <p>總共三位受測者</p>
            <p>1. 受測者一：男性，23歲，為目標用戶</p>
            <p>2. 受測者二：女性，21歲，為目標用戶</p>
            <p>3. 受測者三：男性，21歲，為目標用戶</p>
        </div>
        <div className="task-details">
            <h2>Task 1</h2>
            <p>情境: 剛使用智能水壺喝完水後</p>
            <p>任務: 請在使用智能水壺喝水之後，進入app幫我看一下你今天喝了多少毫升的水、拿到了什麼獎勵以及連續幾天完成喝水目標。</p>
            <img src="https://media.discordapp.net/attachments/1122937314671329452/1237759208590540891/1_0.png?ex=663cd097&is=663b7f17&hm=d1f277b2c37183395bb66637083b2bfb6b6e29abf22657115c070b370e72dcbf&=&format=webp&quality=lossless&width=653&height=490" alt="Task Illustration" />
            <div className="task-toggle-button" onClick={() => toggleShowDetails('task1')}>
                {showDetails.task1 ? "關閉查看" : "查看測試結果"}
            </div>
            {showDetails.task1 && <div className="additional-details">
                <h2>受測者一</h2>
                <p>1. 連續天數那邊不要放一週的圖示，直接顯示連續天數會比較清楚</p>
                <p>2. 紙本模型比較看不出來動畫的效果</p>
                <h2>受測者二</h2>
                <p>1. 希望連續天數也可以有獎勵</p>
                <p>2. 可以改成月曆，比較一目瞭然、有成就感</p>
                <h2>受測者三</h2>
                <p>1. 如果有不同圖表類型的呈現會更好，像是折線圖長條圖等等</p>
            </div>}
        </div>
        <div className="task-details">
            <h2>Task 2</h2>
            <p>情境: 在飲用 普通水壺的水/手搖杯/湯品 後</p>
            <p>任務: 請你手動紀錄200毫升的飲水量</p>
            <img src="https://media.discordapp.net/attachments/1122937314671329452/1237759208967897178/2_0.png?ex=663cd097&is=663b7f17&hm=18aec311a24a045582151951b7cb7fc42f1168de0930a1bd3f27d8019d5523eb&=&format=webp&quality=lossless&width=653&height=490" alt="Task Illustration" />
            <div className="task-toggle-button" onClick={() => toggleShowDetails('task2')}>
                {showDetails.task2 ? "關閉查看" : "查看測試結果"}
            </div>
            {showDetails.task2 && <div className="additional-details">
                <h2>受測者一</h2>
                <p>1. 一開始看到“請輸入您的飲用紀錄”的標題的時候以為要點擊標題，後來才看到下面有輸入欄，如果把標題放在輸入欄上方感覺會比較好</p>
                <h2>受測者二</h2>
                <p>1. 飲水量可以做下拉選單，讓人選單位（如：瓶、碗），因為要知道實際ml有點難</p>
                <h2>受測者三</h2>
                <p>1. 飲用類型是否有更客製化的選單？</p>
            </div>}
        </div>
        <div className="task-details">
            <h2>Task 3</h2>
            <p>情境: 首次下載Water Buddy App</p>
            <p>任務: 請你打開APP完成註冊</p>
            <img src="https://media.discordapp.net/attachments/1122937314671329452/1237759209374875678/3_0.png?ex=663cd097&is=663b7f17&hm=53f123bbe251d143981ca2906e6aac52e68ac1f3d98a165ca74862c490ccad17&=&format=webp&quality=lossless&width=653&height=490" alt="Task Illustration" />
            <div className="task-toggle-button" onClick={() => toggleShowDetails('task3')}>
                {showDetails.task3 ? "關閉查看" : "查看測試結果"}
            </div>
            {showDetails.task3 && <div className="additional-details">
                <h2>受測者一</h2>
                <p>1. 註冊畫面沒什麼問題</p>
                <h2>受測者二</h2>
                <p>1. 註冊畫面清楚</p>
                <h2>受測者三</h2>
                <p>1. 是否要添加第三方登入功能？我平時很常用臉書註冊帳號，這樣方便快速，同時也會連動到好友增加社交功能</p>
            </div>}
        </div>
        <div className="task-details">
            <h2>Task 4</h2>
            <p>情境: 得到足夠金錢後，進入虛擬寵物頁面</p>
            <p>任務: 請幫我在遊戲介面中購買貓跳台，並將貓跳台放在沙發的後面</p>
            <img src="https://media.discordapp.net/attachments/1122937314671329452/1237759209949626478/4_0.png?ex=663cd098&is=663b7f18&hm=6f2aa425978f07446574c3983d85fbadbacaa33a7a496abe6ab22042ad03b323&=&format=webp&quality=lossless&width=653&height=490" alt="Task Illustration" />
            <div className="task-toggle-button" onClick={() => toggleShowDetails('task4')}>
                {showDetails.task4 ? "關閉查看" : "查看測試結果"}
            </div>
            {showDetails.task4 && <div className="additional-details">
                <h2>受測者一</h2>
                <p>1. 購物車的圖示會以為是已經購買的東西，如果改成商店的圖示會比較好</p>
                <h2>受測者二</h2>
                <p>1. 感覺東西會沒地方放，空間可以再大一點</p>
                <h2>受測者三</h2>
                <p>1. 畫面如果立體感加強一點，視覺感會更好</p>
            </div>}
        </div>
    </div>
  );
};

export default LofiPrototype;
