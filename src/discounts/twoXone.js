export default function twoXone(articles) {
  articles.find((element, index) => {if(index%2 > 0) element.price = 0;});
}