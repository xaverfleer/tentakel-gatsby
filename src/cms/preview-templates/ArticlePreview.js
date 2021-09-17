import Article from "../../templates/Article";

export default ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return Article({
    data: {
      article: {
        frontmatter: {
          title: data.title,
          author: data.author,
          category: data.category,
          datetime: data.datetime,
          pic: data.pic,
          teaser: data.teaser,
        },
        html: data.body,
      },
    },
  });
};
