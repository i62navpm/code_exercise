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

co1.scan('VOUCHER');
co1.scan('TSHIRT');
co1.scan('MUG');

co2.scan('VOUCHER');
co2.scan('TSHIRT');
co2.scan('VOUCHER');

co3.scan('TSHIRT');
co3.scan('TSHIRT');
co3.scan('TSHIRT');
co3.scan('VOUCHER');
co3.scan('TSHIRT');

co4.scan('VOUCHER');
co4.scan('TSHIRT');
co4.scan('VOUCHER');
co4.scan('VOUCHER');
co4.scan('MUG');
co4.scan('TSHIRT');
co4.scan('TSHIRT');

co1.total();
co2.total();
co3.total();
co4.total();