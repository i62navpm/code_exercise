import Checkout    from './models/checkout.js';
import twoXone from './discounts/twoXone.js';
import bulk    from './discounts/bulk.js';

let discounts = {
  'VOUCHER': twoXone,
  'TSHIRT': bulk
};

let co1  = new Checkout(discounts);
let co2 = new Checkout(discounts);
let co3 = new Checkout(discounts);
let co4 = new Checkout(discounts);

co1.scan('VOUCHER')
   .scan('TSHIRT')
   .scan('MUG');

co2.scan('VOUCHER')
   .scan('TSHIRT')
   .scan('VOUCHER');

co3.scan('TSHIRT')
   .scan('TSHIRT')
   .scan('TSHIRT')
   .scan('VOUCHER')
   .scan('TSHIRT');

co4.scan('VOUCHER')
   .scan('TSHIRT')
   .scan('VOUCHER')
   .scan('VOUCHER')
   .scan('MUG')
   .scan('TSHIRT')
   .scan('TSHIRT');

co1.total();
co2.total();
co3.total();
co4.total();