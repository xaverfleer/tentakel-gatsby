import Article from "../../templates/Article";
const remark = require(`remark`);
const mdastToHast = require(`mdast-util-to-hast`);
const hastToHtml = require(`hast-util-to-html`);

const remarker = new remark();

export default function ArticlePreview({ entry }) {
  const data = entry.getIn(["data"]).toJS();
  const markdownAst = remarker.parse(data.body);
  const htmlAst = mdastToHast(markdownAst, { allowDangorousHtml: true });
  const html = hastToHtml(htmlAst, { allowDangorousHtml: true });
  const htmlSanitized = html
    .split('<img src="uploads/')
    .join('<img src="/uploads/');

  return Article({
    data: {
      article: {
        frontmatter: {
          title: data.title,
          author: data.author,
          category: data.category,
          datetime: data.datetime.toISOString(),
          pict: urlToSharpStructure(data.pict),
          teaser: data.teaser,
        },
        html: htmlSanitized,
      },
    },
  });
}

function urlToSharpStructure(url) {
  return {
    childImageSharp: {
      gatsbyImageData: {
        layout: "constrained",
        images: {
          sources: [
            {
              srcSet: url.replace("../../static/", "/"),
              type: "image/webp",
              sizes: "(min-width: 800px) 800px, 100vw",
            },
          ],
        },
        width: 800,
        height: 514,
      },
    },
  };
}
