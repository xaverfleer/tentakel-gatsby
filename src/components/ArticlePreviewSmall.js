import React from "react";

const ArticlePreview = ({
  category,
  isMain,
  pic,
  teaserText,
  title,
  authorAndDate,
}) => (
  <div className={`article-preview article-preview--small`}>
    <div className="article-preview__category--small">{category}</div>
    <h2 className="article-preview__title">{title}</h2>
    <div className="article-preview__author-and-date">{authorAndDate}</div>
    <img className="article-preview__img" src={pic}></img>
    <div className="article-preview__teaser-text">{teaserText}</div>
  </div>
);
export default ArticlePreview;
