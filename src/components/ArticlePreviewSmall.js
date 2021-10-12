import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ArticlePreview = ({
  alt,
  authorAndDate,
  category,
  imgDescription,
  pic,
  pict,
  quote,
  quoteAuthor,
  slug,
  teaserText,
  title,
}) => (
  <div className={`article-preview article-preview--small`}>
    <a href={slug}>
      <div className="article-preview__category article-preview__category--small">
        {category}
      </div>
      {title && <h2 className="article-preview__title">{title}</h2>}
      {quote && <h2 className="article-preview__quote">{quote}</h2>}
      {pict && (
        <GatsbyImage
          className="article-preview__img article-preview__img--small"
          image={getImage(pict)}
          alt={alt}
        />
      )}
      {pic && (
        <img
          className="article-preview__img article-preview__img--small"
          src={pic}
          alt={alt}
        ></img>
      )}
      {imgDescription && (
        <div className="article-preview__img-description">{imgDescription}</div>
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
