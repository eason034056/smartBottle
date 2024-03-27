import React from "react";
import { createRoot } from "react-dom/client"; // 修改导入
import { HashRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // 使用createRoot代替ReactDOM.render

root.render(<App />);
