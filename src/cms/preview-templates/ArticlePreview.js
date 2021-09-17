import Article from "../../templates/Article";
import showdown from "showdown";

export default ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  const converter = new showdown.Converter(),
    html = converter.makeHtml(data.body);

  return Article({
    data: {
      article: {
        frontmatter: {
          title: data.title,
          author: data.author,
          category: data.category,
          datetime: data.datetime.toISOString(),
          pic: data.pic,
          teaser: data.teaser,
        },
        html,
      },
    },
  });
};
