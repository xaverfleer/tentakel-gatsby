import React from "react";

const ArticlePreview = ({
  category,
  pic,
  teaserText,
  title,
  authorAndDate,
}) => (
  <div className="article-preview article-preview--main">
    <div className="article-preview__category article-preview__category--main">
      {category}
    </div>
    <img className="article-preview__img" src={pic} alt="TODO"></img>
    <div className="article-preview__teaser">
      <h2 className="article-preview__title">{title}</h2>
      <div className="article-preview__teaser-text">{teaserText}</div>
      <div className="article-preview__author-and-date">{authorAndDate}</div>
    </div>
  </div>
);
export default ArticlePreview;
