import Item    from './models/item.js';
import twoXone from './discounts/twoXone.js';
import bulk    from './discounts/bulk.js';

let articles = [];

articles.push(new Item('VOUCHER', 'Cabify Voucher', 5.));
articles.push(new Item('VOUCHER', 'Cabify Voucher', 5.));
articles.push(new Item('TSHIRT', 'Cabify T-Shirt', 20.));
articles.push(new Item('TSHIRT', 'Cabify T-Shirt', 20.));
articles.push(new Item('TSHIRT', 'Cabify T-Shirt', 20.));
articles.push(new Item('MUG', 'Cafify Coffee Mug', 7.5));

let discounts = {
  'VOUCHER': twoXone,
  'TSHIRT': bulk
};

for(let disc in discounts) discounts[disc](articles.filter((item) => item.id === disc));

console.log(articles);
console.log(articles.reduce((previous, current) => {return {price: previous.price + current.price};}));