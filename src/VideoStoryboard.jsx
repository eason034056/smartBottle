import React from "react";
import "./VideoStoryboard.css";

const VideoStoryboard = () => {
  const tasks = [
    {
      taskName: "任務一: 使用智能水壺",
      scenes: [
        {
          title: "場景一：日常生活",
          content: "內容：鏡頭打到一個辦公室，一名員工在電腦前工作，旁邊的水壺已經被他閒置很久。",
          storyboard: "分鏡想法：鏡頭對準水壺進行縮時錄影，員工忙了超久都沒有碰過水壺，表示他很久沒有喝水。",
          subtitle: "字幕：「又忘了喝水？」"
        },
        {
          title: "場景二：解決方法介紹",
          content: "內容：智能水壺出現，介紹這款app，展示如何使用，氣氛改變，音樂變得歡樂。",
          storyboard: "分鏡想法：將縮時錄影中水壺替換成我們的智能水壺，音樂與氣氛改變，畫面上呈現app提醒員工喝水的通知。這時縮時錄影結束，員工看向手機的通知，喝下了使用智能水壺後的第一口水。",
          subtitle: "字幕：「用科技，讓喝水變得有趣。」"
        }
      ]
    },
    {
        taskName: "任務二: 使用app達成每日飲水量",
        scenes: [
          {
            title: "場景三：功能使用",
            content: "內容：員工使用智能水壺喝水後，app自動記錄飲水量，使用這介面顯示經驗值累積和解鎖新植物或寵物。",
            storyboard: "分鏡想法：員工喝下第一口水後，app自動記錄了那一口水的飲水量。動畫呈現一滴水滴入了農場中，以及經驗值逐漸增加。當天，員工成功達成了喝水目標，介面跳出他解鎖了新的角色，讓他選擇自己要一棵小樹還是一隻貓咪。",
            subtitle: "字幕：「每一滴水都充滿價值與樂趣。」"
          }
        ]
      },
      {
        taskName: "任務三: App內動植物購買與養成",
        scenes: [
          {
            title: "場景四：成就與獎勵",
            content: "內容：隨著日子過去，員工解鎖新的植物和動物，app顯示經驗值升級。",
            storyboard: "分鏡想法：某一日員工達成當日的飲水目標後，點開app發現自己解鎖了新的動物與植物。",
            subtitle: "字幕：「喝水，也能培養生活的樂趣。」"
          },
          {
            title: "場景五：習慣建立",
            content: "內容：過了一段時間，員工已經建立起了喝水的習慣，農場內的植物與動物越來越茁壯，生氣勃勃。",
            storyboard: "分鏡想法：員工穿著不同衣服重複喝水的動作，動物在大農場裡面跑跳嬉戲。",
            subtitle: "字幕：「健康的習慣，快樂的生活。」"
          }
        ]
      }
      
  ];

  return (
    <div className="video-storyboard-container">
      <h1 className="video-storyboard-title">Video Storyboard</h1>
      <div className="storyboard-setting">
        <p>定義目標用戶：可能是希望改善水攝取習慣的人群。</p>
        <p>場景環境：用戶可能在家中、辦公室或健身房等日常環境。</p>
        <p>問題：用戶不記得或不願意定期喝水。</p>
        <p>需求：需要一個激勵和提醒喝水的方法。</p>
        <p>用戶當時的情緒：可能是忘記喝水後的口渴或是因健康理由想要喝水但忘記了的焦慮。</p>
        <p>解決過程：介紹這款app的特點和使用過程。</p>
        <p>解法：用戶使用app記錄飲水量，獲得經驗值，並在app中解鎖獎勵來激勵自己。</p>

      </div>
      {tasks.map((task, taskIndex) => (
  <div key={taskIndex} className="task">
    <div className="task-header">
      <h1>{task.taskName}</h1>
    </div>
    {task.scenes.map((scene, sceneIndex) => (
      <div key={sceneIndex} className="scene">
        <div className="scene-header">
          <h2>{scene.title}</h2>
        </div>
        <div className="scene-body">
          <p>{scene.content}</p> 
          <p>{scene.storyboard}</p> 
          <p>{scene.subtitle}</p> 
        </div>
      </div>
    ))}
  </div>
  
))}
<img src="https://cdn.discordapp.com/attachments/1122937314671329452/1232697496954863709/1.png?ex=662a6681&is=66291501&hm=f6cfe37c7b9ece633890016f6e0a0fc82d2d982ee044d327fc769265b7afba2f&" alt="scene-1"></img>
<img src="https://cdn.discordapp.com/attachments/1122937314671329452/1232698729929117736/2.png?ex=662a67a7&is=66291627&hm=aeb7847e2fcbd382a2bbd55398b2b9d5ab979a6086f602b4e683d34b36e56be2&" alt="scene-2"></img>
<img src="https://cdn.discordapp.com/attachments/1122937314671329452/1232698730436624525/3.png?ex=662a67a7&is=66291627&hm=fd2aa663cfc7d797be5b92e24f10ca8b6f29c36cbf66688d20a2baafef44afb9&" alt="scene-3"></img>
<img src="https://cdn.discordapp.com/attachments/1122937314671329452/1232698730822504478/4.png?ex=662a67a7&is=66291627&hm=a2a7f853e316c29341fbe4125ce7b20c113abffa57293251763b3ef0e85e6593&" alt="scene-4"></img>
<img src="https://cdn.discordapp.com/attachments/1122937314671329452/1232698731246260234/5.png?ex=662a67a7&is=66291627&hm=bc8f7508dd363a930b130953853a92306cf1d359b9dc0ef8eae0cc09baea0270&" alt="scene-"></img>
    </div>
  );
};

export default VideoStoryboard;
