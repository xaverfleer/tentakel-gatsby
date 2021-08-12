import React from "react";

const ArticlePreview = ({
  authorAndDate,
  category,
  imgDescription,
  pic,
  quoteAuthor,
  teaserText,
  title,
}) => (
  <div className={`article-preview article-preview--small`}>
    <div className="article-preview__category--small">{category}</div>
    <h2 className="article-preview__title">{title}</h2>
    <div className="article-preview__author-and-date">{authorAndDate}</div>
    {pic && (
      <>
        <img className="article-preview__img" src={pic}></img>
        <div className="article-preview__img-description">{imgDescription}</div>
      </>
    )}
    <div className="article-preview__teaser-text">{teaserText}</div>
    <div className="article-preview__quote-author">{quoteAuthor}</div>
  </div>
);
export default ArticlePreview;
