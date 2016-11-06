import  Item from './models/item.js';

let articles = [];

articles.push(new Item('VOUCHER', 'Cabify Voucher', 5.));
articles.push(new Item('TSHIRT', 'Cabify T-Shirt', 20.));
articles.push(new Item('MUG', 'Cafify Coffee Mug', 7.5));

console.log(articles);