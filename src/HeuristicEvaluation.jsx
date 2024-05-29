import React, { useState } from "react";
import "./HeuristicEvaluation.css";

const HeuristicEvaluation = () => {

const [showDetails, setShowDetails] = useState({
    person1: false,
    person2: false,
    person3: false,
    person4: false
    });

    const toggleShowDetails = (person) => {
        setShowDetails((prevDetails) => {
            const newDetails = { person1: false, person2: false, person3: false, person4: false };
            newDetails[person] = !prevDetails[person];
            return newDetails;
        });
    }

return (
    <div className="heuristic-container">
        <h1>Heuristic Evaluation &<br></br>Refinement Plan</h1>
        <div className="heuristic-task-detail">
            <h2>評估人員</h2>
            <div className="test-person-detail">
                <p style={{ fontWeight: 'bold' }}>1. 林同學</p>
                <ul>
                    <li>清華大學工工所碩二</li>
                    <li>AR軟體開發人員</li>
                    <li>修習過「人類訊息處理」</li>
                </ul>
            </div>
            <div className="test-person-detail">
                <p style={{ fontWeight: 'bold' }}>2. 吳同學</p>
                <ul>
                    <li>清華大學工工所碩一</li>
                    <li>AR軟體UI設計</li>
                    <li>修習過「人類訊息處理」</li>
                </ul>
            </div>
            <div className="test-person-detail">
                <p style={{ fontWeight: 'bold' }}>3. 郭同學</p>
                <ul>
                    <li>清華大學工工所碩一</li>
                    <li>修習過「人類訊息處理」</li>
                    <li>修習過「google UX課程」</li>
                    <li>大學時曾擔任UX實習生</li>
                    <li>參與過多場UX線上講座</li>
                </ul>
            </div>
            <div className="test-person-detail">
                <p style={{ fontWeight: 'bold' }}>4. 陳同學</p>
                <ul>
                    <li>清華大學工工所碩一</li>
                    <li>修習過「人因工程與設計」</li>
                </ul>
            </div>
        </div>


        <div className="heuristic-task-detail">
            <h2>測試流程</h2>
            <div className="procedure-detail">
                <p style={{ fontWeight: 'bold' }}>1. 團隊介紹、課程介紹</p>
                <ul>
                    <li>介紹團隊成員、參與測試的主問及輔問</li>
                    <li>介紹課程：「人機互動創新科技設計」</li>
                </ul>
            </div>
            <div className="procedure-detail">
                <p style={{ fontWeight: 'bold' }}>2. 專案介紹、測試方法說明</p>
                <ul>
                    <li>說明智能水壺與APP目的、受眾、Findings</li>
                    <li>介紹可用性測試方法、測試目的</li>
                </ul>
                
            </div>
            <div className="procedure-detail">
                <p style={{ fontWeight: 'bold' }}>3. 說明個人資料使用</p>
                <ul>
                    <li>去識別化、需要個人背景/學歷/經歷等資訊</li>
                    <li>需要錄音、拍照留存</li>
                </ul>
                
            </div>
            <div className="procedure-detail">
                <p style={{ fontWeight: 'bold' }}>4. 說明測試流程</p>
                <ol>
                    <li>使用Figma Prototype，過程中放聲思考，我們不會參與討論與回答，但有任何想法都可以在此階段操作時提出</li>
                    <li>說明測試任務及情境</li>
                    <li>尼爾森十大原則提問</li>
                </ol>
                
                
            </div>
            
            
        </div>
        <div className="heuristic-task-detail">
            <h2>評估人員測試情形</h2>
            <div className="test-situation-toggle-button-container">
                <div className="test-situation-toggle-button" onClick={() => toggleShowDetails('person1')}>
                    {showDetails.person1 ? "關閉查看" : "受測者一"}
                </div>
                <div className="test-situation-toggle-button" onClick={() => toggleShowDetails('person2')}>
                    {showDetails.person2 ? "關閉查看" : "受測者二"}
                </div>
                <div className="test-situation-toggle-button" onClick={() => toggleShowDetails('person3')}>
                    {showDetails.person3 ? "關閉查看" : "受測者三"}
                </div>
                <div className="test-situation-toggle-button" onClick={() => toggleShowDetails('person4')}>
                    {showDetails.person3 ? "關閉查看" : "受測者四"}
                </div>
            </div>
            
            {showDetails.person1 && <div className="test-situation">
                <h2>受測者一受測情形:</h2>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task1/1.jpg`} alt="pic-1"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task1/2.jpg`} alt="pic-2"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task1/3.jpg`} alt="pic-3"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task1/4.jpg`} alt="pic-4"/>
            </div>}
            
            {showDetails.person2 && <div className="test-situation">
                <h2>受測者二受測情形:</h2>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/1.jpg`} alt="pic-1"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/2.jpg`} alt="pic-2"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/3.jpg`} alt="pic-3"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/4.jpg`} alt="pic-4"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/5.jpg`} alt="pic-5"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/6.jpg`} alt="pic-6"/>
            </div>}
            
            {showDetails.person3 && <div className="test-situation">
                <h2>受測者三受測情形:</h2>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task3/1.jpg`} alt="pic-1"/>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task3/2.jpg`} alt="pic-2"/>
            </div>}

            {showDetails.person4 && <div className="test-situation">
                <h2>受測者四受測情形:</h2>
                <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task4/1.jpg`} alt="pic-1"/>
            </div>}

        </div>
        <div className="heuristic-task-detail" style={{paddingBottom: "5rem"}}>
            <h2>介面設計問題＆解決方案</h2>
            <p>任務一: </p>
            <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task1/改善1.jpg`} alt="pic-1"/>
            <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task1/改善2.jpg`} alt="pic-2"/>
            <p>任務二: </p>
            <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/改善1.jpg`} alt="pic-1"/>
            <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/改善2.jpg`} alt="pic-2"/>
            <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/改善3.jpg`} alt="pic-3"/>
            <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task2/改善4.jpg`} alt="pic-4"/>
            <p>任務三: </p>
            <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task3/改善1.jpg`} alt="pic-1"/>
            <img src={`${process.env.PUBLIC_URL}/pictures/heuristic evaluation/task3/改善2.jpg`} alt="pic-2"/>

        </div>
    </div>
  );
};

export default HeuristicEvaluation;
