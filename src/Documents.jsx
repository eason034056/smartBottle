import React from "react";
import { Link } from "react-router-dom";
import "./Documents.css"; // 确保已经创建并导入了这个CSS文件

// 假设这是你的分类数据
const categories = [
  { name: "Needfinding", to: "/needfinding" },
  {
    name: "Point of View & Experience Prototypes",
    to: "/pov-and-experience-prototypes",
  },
  {
    name: "Low-Fidelity Prototype & Test",
    to: "/lofi-prototype",
  },
  {
    name: "Medium-fi Prototype",
    to: "/mid-fi",
  },
  {
    name: "Heuristic Evaluation",
    to: "/heuristic-evaluation",
  },
  {
    name: "Hi-fidelity Prototype",
    to: "/hi-fi",
  },
  {
    name: "Poster & Pitch Slide",
    to: "/poster",
  },
];

const Documents = () => {
  return (
    <div className="documents-container">
      <div className="cards-container">
        {categories.map((category, index) => (
          <DocumentCard key={index} title={category.name} to={category.to} />
        ))}
      </div>
    </div>
  );
};

const DocumentCard = ({ title, to }) => {
  return (
    <Link to={to} className="document-card">
      <h1>{title}</h1>
    </Link>
  );
};

export default Documents;
