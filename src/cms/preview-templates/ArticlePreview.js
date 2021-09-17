import Article from "../../templates/Article";

export default ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  debugger;

  return Article({
    article: {
      frontmatter: {
        title: data.title,
        datetime: data.datetime,
        author: data.author,
        category: data.category,
        datetime: data.datetime,
        pic: data.pic,
        title: data.title,
        teaser: data.teaser,
      },
      html: data.html,
    },
  });
};
