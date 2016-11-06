export default function bulk(articles) {
  if(articles.length > 2) articles.map((item) => item.price = 19.);
}