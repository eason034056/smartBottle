import React, { useState } from "react";
import "./Pov.css";

function HMW({ title, description, onCardClick }) {
  return (
    <div className="hmw" >
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button" onClick={onCardClick}>Solutions</div>
    </div>
  );
}

function Solution({ description, link}) {
  const handleSolutionClick = () => {
    window.location.href = link; // 導航到提供的連結
  };

  return (
    <div className="solution">
      <div className="button" onClick={handleSolutionClick}>Experience Prototype</div>
      <div className="description"><p>{description}</p></div>
    </div>
  );
}

const Pov = () => {
  const [showPov1List, setPov1ShowList] = useState(false);
  const [showPov2List, setPov2ShowList] = useState(false);
  const [showPov3List, setPov3ShowList] = useState(false);

  const pov1Items = [
    "如何設計一個個人化的水壺，透過獨特設計提醒她記得帶水壺？",
    "如何通過遊戲化的方法，將帶水壺的行為轉化為一種有趣的挑戰或競賽？",
    "如何利用科技，讓水壺能夠在她離家時自動提醒她？",
    "如何設計一種獎勵系統，當她連續多天記得帶水壺時，可以獲得某種獎勵或優惠？",
    "如何將水壺與她的日常活動，如上課時間表，進行同步，提前提醒她？",
    "如何透過定制化的水壺設計，反映她的個性和興趣，使水壺成為她表達自我風格的一部分？",
    "如何結合當下流行文化或藝術元素，設計一系列令人難以忘記的水壺？",
    "如何通過建立一個校園範圍內的飲水站網絡，即使她偶爾忘記帶水壺也能輕鬆補充水分？",
    "如何讓她在事務繁忙的情況下，在出門時仍然可以想起要攜帶水壺出門？",
  ];
  const pov2Items = [
    "如何讓他不花費太多意志力，成功遵守已經制定的喝水計畫？",
    "如何通過個人化建議幫助她確定每日的理想飲水量，並鼓勵她達成這個目標？",
    "如何透過科技讓他對自己的膚況變化有感？",
    "如何讓他知道自己正在改善身體代謝？",
    "如何設計一個提醒她喝水的系統，以增強她的飲水習慣？",
    "如何創建一個有趣的挑戰或遊戲化應用，讓她在增加飲水量的同時也能享受樂趣？",
    "如何讓她能夠輕鬆追蹤和分析自己的飲水習慣，以便更好地了解和改善？",
    "如何設計一個社交機制或團體，讓她與同樣希望改善飲水習慣的人相互支持和鼓勵？",
    "如何創造一個她能夠持續參與的獎勵計劃，以獎勵她達到飲水目標的行為？",
    "如何幫助她識別出哪些時刻是她最容易忘記喝水的，從而針對性地改善？",
    "如何增加她對於遵守飲水計畫的毅力？",
    "如何讓她建立良好的喝水習慣，在還沒感到口渴的情況下，依然可以記得喝水？",
    "如何讓她知道更多喝水帶來的好處，並讓她深感認同？",
    "如何讓她知道怎樣的飲水計畫適合自己？",
  ];
  const pov3Items = [
    "如何設計一款學習使用者習慣並自動調整提醒頻率的智能飲水app？",
    "如何通過AR技術，將日常飲水任務轉化為一個探索遊戲？",
    "如何利用物聯網技術，讓水壺能夠與手機應用同步，自動記錄飲水量？",
    "如何設計一款可以與健身或飲食追蹤應用程式整合的飲水app？",
    "如何開發一個社交功能，讓使用者可以與朋友互相挑戰，增加飲水量？",
    "如何創建一個動態回饋系統，根據她的飲水進度展示不同的動畫或視覺效果？",
    "如何開發一款能夠根據使用者位置和天氣條件自動調整飲水提醒的app？",
    "如何設計一個個性化水攝入量推薦系統，根據她的體重、活動量和健康狀態提供建議？",
    "如何創造一個獎勵系統，當達到特定飲水目標時，使用者可以解鎖特殊獎勵或優惠？",
    "如何開發一個能夠追蹤和分析她的飲水習慣，並提供改善建議的工具？",
    "如何開發一款根據使用者心情和活動水平提供飲水建議的app？",
    "如何設計一款結合日記功能，讓使用者記錄飲水對其健康影響的體驗和感受的app？",
    "如何整合智能手表或可穿戴設備，實現手腕上的飲水提醒和追蹤？",
    "如何創建一個以目標設定和達成為導向，提供長期追蹤和激勵的系統？",
    "如何設計一個使用人工智慧AI來提供日常飲水小提示和建議的功能？",
    "如何開發一款可以自動調整飲水目標，根據季節和健康狀況變化的app？",
    "如何設計一款能夠識別不同種類飲料並計算其水分含量的應用程式？",
  ];

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (id) => {
    if (activeCard === id) {
      // 如果點擊的是當前已激活的卡片，則收起details-div
      setActiveCard(null);
    } else {
      // 否則，顯示新的details-div
      setActiveCard(id);
    }
  };

  const cardInfos = [
    {
      id: 1,
      title: "HMW 1",
      description: "如何透過有趣的方法，讓他在喝水的時也能享受樂趣",
      solutions: [
        "創建一個app，使用者每喝一定量的水可以獲得經驗值，隨著經驗值的累積，使用者可以解鎖新的等級或獎勵，使用者可以在應用中養成植物以及不同動物，其數量與成長依賴於使用者的飲水量",
        "提供每日或每周的飲水挑戰，完成後可獲得徽章、獎勵或解鎖新挑戰",
        "設計動畫或特效，當使用者記錄飲水時立即展示，提供即時的正面反饋",
        "根據使用者需要設置個性化的飲水目標，達成後獲得特殊獎勵",
        "使用者通過喝水獲得虛擬貨幣，可用於購買新款式的水壺",
        "鼓勵使用者創建或參與飲水挑戰小組，與朋友一起完成目標",
        "使用者可以記錄他們的飲水習慣，app提供有趣的統計和視覺化圖表",
        "使用者可以收到根據個人喜好定制的有趣提醒，如趣味動畫、聲音或激勵語句",
        "結合環保元素，使用者的飲水行為可以轉化為應用中的樹木種植、海洋清潔等環保活動，激勵使用者在保持健康的同時，也為地球做出貢獻",
        "可以透過飲水量計算使用者減少多少的寶特瓶使用量，於app上呈現，讓使用者在喝水的同時也能做到減塑運動",
      ],
    },
    {
      id: 2,
      title: "HMW 2",
      description: "如何讓他不花費太多意志力，成功遵守已經制定的喝水計畫",
      solutions: [
        "將喝水與日常活動結合，例如每次上廁所後都喝一杯水。",
        "尋找喜歡的水的口味，例如加入柑橘、薄荷或其他水果或草本調味料。",
        "在工作桌上放置一個標誌或標籤，提醒自己喝水。",
        "使用一個大水瓶，而不是小杯子，這樣可以減少去補充的次數。",
        "在水杯上寫下鼓勵的話語或笑話，每次喝水時都能增添一點歡樂。",
        "在喝水時進行輕鬆的冥想或呼吸練習，讓喝水成為一個身心健康的時刻。",
        "每天挑戰自己喝不同種類的水，例如礦泉水、氣泡水或植物茶，讓喝水變得更加多元化。",
        "結合運動app功能，讓使用者在運動後自然而然的喝水",
        "與品牌聯名讓使用者設定飲水目標而獲得想要的獎勵。",
        "使用ai助手協助使用者建立飲水習慣，例如：早上起床喝一杯水，餐前喝一杯水等等。",
      ],
    },
    {
      id: 3,
      title: "HMW 3",
      description: "如何開發一個功能，讓使用者可以與朋友互相挑戰，增加飲水量",
      solutions: [
        "鼓勵使用者創建或參與飲水挑戰小組，與朋友一起完成目標",
        "與朋友進行喝水比賽，看誰能首先完成每日的水攝取目標，贏家可以得到小獎品。",
        "設計有趣的飲水標語海報，放在家或辦公室的顯眼位置，提醒使用者隨時補充水分並邀請朋友一起參加挑戰。",
        "在主流社交媒體當中，發起邀請朋友一起多喝水的活動。",
        "發起紀錄喝水的一天的短影片活動，讓使用者在健康飲水的同時，也能將自己喝水的日常剪輯成短影片分享至社交媒體上。",
        "根據每日、週、月的飲水量進行排名，讓飲水量達到健康目標的使用者能交友，拓廣交友圈，並且得到使用者更詳細的資訊，例如：ig帳號、個人詳細自介。",
        "提供一個視覺化的進度條，展示使用者和朋友的飲水進展和相互比較。",
        "在主流社交媒體當中，發起飲水挑戰分享日。",
        "在每年3/22，世界水資源日，發起多喝水不浪費的活動，邀請朋友一起參與。",
      ],
    },
  ];

  const [activeSolution, setActiveSolution] = useState(null);


  const solutionInfos = [{
    id: 1,
    description: "創建一個app，使用者每喝一定量的水可以獲得經驗值，隨著經驗值的累積，使用者可以解鎖新的等級或獎勵，使用者可以在應用中養成植物以及不同動物，其數量與成長依賴於使用者的飲水量",
    link: "https://docs.google.com/presentation/d/1lnGXT4-W4GmwE6ptr9RyALtvaU8GfuAAN7cCpis6LYg/edit?usp=sharing",
  },
  {
    id: 2,
    description: "使用者可以收到根據個人喜好定制的有趣提醒，如趣味動畫、聲音或冷知識",
    link: "https://docs.google.com/presentation/d/1S2dYauBjWLOesg-JXF3lg9twxDL74bjgwAznpvVVeo4/edit?usp=sharing",
  },
{
  id: 3,
  description: "尋找喜歡的水的口味，例如加入柑橘、薄荷或其他水果或草本調味料",
  link: "https://docs.google.com/presentation/d/11S5tUjyguU8lRX0bTRPuUv1zqKgwxp4fqHaYyGnrqIU/edit?usp=sharing",
}];
  return (
    <div className="pov-container">
      <div>
        <h1>Point of View</h1>
        <div className="pov">
          <div className="pov1-left">
            <h2>POV1</h2>
            <p>
              一個課業繁忙會因為事情很多而忘記帶水壺的23歲女性研究生，常常會因為忘記帶水壺不能喝水而感到煩惱，但又覺得買瓶裝水很浪費錢。他需要一個他不會忘記帶的水壺，因為對他來說，一個夠吸引他的動機讓他記得帶水壺很重要。
            </p>
            <div className="botton-section">
              <div
                className="button"
                onClick={() => setPov1ShowList(!showPov1List)}
              >
                HMWs
              </div>
            </div>
          </div>
          <div className="pov1-right">
          <img src={`${process.env.PUBLIC_URL}/pictures/POV/pov1.png`} alt="pov1-icon" />
          </div>
        </div>
        {showPov1List && (
          <div className="hmw-section">
            {pov1Items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        )}
        <div className="pov">
          <div className="pov2-left">
          <img src={`${process.env.PUBLIC_URL}/pictures/POV/pov2.png`} alt="pov2-icon" />
          </div>
          <div className="pov2-right">
            <h2>POV2</h2>
            <p>
              一個較缺乏毅力的女性大學生，覺得自己的飲水習慣不好，只有在口渴時或想到才喝水，想要改善自己目前的飲水情況．因為對她來說，多喝水可以改善膚況，促進代謝。
            </p>
            <div
              className="button"
              onClick={() => setPov2ShowList(!showPov2List)}
            >
              HMWs
            </div>
          </div>
        </div>
        {showPov2List && (
          <div className="hmw-section">
            {pov2Items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        )}
        <div className="pov">
          <div className="pov3-left">
            <h2>POV3</h2>
            <p>
              一個喜歡接觸新科技、努力執行飲水計畫的女性大學生，覺得自己需要操作直覺、有更多且新奇的健康app回饋來督促她喝更多水，因為她覺得現有的app讓他沒有動力繼續使用。
            </p>
            <div
              className="button"
              onClick={() => setPov3ShowList(!showPov3List)}
            >
              HMWs
            </div>
          </div>
          <div className="pov3-right">
          <img src={`${process.env.PUBLIC_URL}/pictures/POV/pov3.png`} alt="pov3-icon" />
          </div>
        </div>
        {showPov3List && (
          <div className="hmw-section">
            {pov3Items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </div>
        )}
        <div className="hmw-container">
          <div className="best-hmw">
            <h1>Best HMWs</h1>
            <div className="hmw-cards-container">
              {cardInfos.map((info) => (
                <HMW
                  key={info.id}
                  title={info.title}
                  description={info.description}
                  onCardClick={() => handleCardClick(info.id)}
                />
              ))}
            </div>
          </div>
          {activeCard && (
            <div className="details-div">
              <h2>Solutions for: {cardInfos.find((info) => info.id === activeCard).title}</h2>
              <ul>
                {cardInfos
                  .find((info) => info.id === activeCard)
                  .solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        <div className="solution-container">
          <div className="best-solutions">
            <h1>Best Solutions</h1>
            <div className="solutions-cards-container">
              {solutionInfos.map((info) => (
                <Solution
                key={info.id}
                description={info.description}
                link={info.link} 
              />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section></section>
    </div>
  );
};

export default Pov;
