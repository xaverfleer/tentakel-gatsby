import React from "react";

const ArticlePreview = ({
  authorAndDate,
  category,
  imgDescription,
  pic,
  quote,
  quoteAuthor,
  slug,
  teaserText,
  title,
}) => (
  <div className={`article-preview article-preview--small`}>
    <a href={slug}>
      <div className="article-preview__category--small">{category}</div>
      {title && <h2 className="article-preview__title">{title}</h2>}
      {quote && <h2 className="article-preview__quote">{quote}</h2>}
      {pic && (
        <>
          <img
            className="article-preview__img article-preview__img--small"
            src={pic}
            alt="TODO"
          ></img>
          <div className="article-preview__img-description">
            {imgDescription}
          </div>
        </>
      )}
      {teaserText && (
        <div className="article-preview__teaser-text">{teaserText}</div>
      )}
      {authorAndDate && (
        <div className="article-preview__author-and-date">{authorAndDate}</div>
      )}
      {quoteAuthor && (
        <div className="article-preview__quote-author">{quoteAuthor}</div>
      )}
    </a>
  </div>
);
export default ArticlePreview;
