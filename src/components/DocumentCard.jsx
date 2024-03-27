import React from "react";
import { Link } from "react-router-dom";

const DocumentCard = (props) => {
  return (
    // 使用Link组件包裹整个卡片内容
    <Link to={`/${props.to}`} className="document-card-link">
      <div className="document-card">
        <h1>{props.title}</h1>
      </div>
    </Link>
  );
};

export default DocumentCard;
