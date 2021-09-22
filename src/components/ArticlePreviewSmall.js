import React from "react";

const ArticlePreview = ({
  authorAndDate,
  category,
  imgDescription,
  pic,
  quoteAuthor,
  slug,
  teaserText,
  title,
}) => (
  <div className={`article-preview article-preview--small`}>
    <a href={slug}>
      <div className="article-preview__category--small">{category}</div>
      {title && <h2 className="article-preview__title">{title}</h2>}
      {pic && (
        <>
          <img className="article-preview__img" src={pic} alt="TODO"></img>
          <div className="article-preview__img-description">
            {imgDescription}
          </div>
        </>
      )}
      <div className="article-preview__teaser-text">{teaserText}</div>
      <div className="article-preview__author-and-date">{authorAndDate}</div>
      <div className="article-preview__quote-author">{quoteAuthor}</div>
    </a>
  </div>
);
export default ArticlePreview;
