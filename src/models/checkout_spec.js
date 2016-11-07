/* eslint-disable */

import Checkout from './checkout.js';
import twoXone from '../discounts/twoXone.js';
import bulk from '../discounts/bulk.js';

describe("Testing Checkout object", () => {
  let co;
  const discounts = {
    'VOUCHER': twoXone,
    'TSHIRT': bulk
  };
  beforeEach(() => {
    co = new Checkout(discounts);
  })

  describe("Use cases", () => {
    it("[A] user [I] check the total of: VOUCHER, TSHIRT, MUG is 32.5€", () => {
      co.scan('VOUCHER')
        .scan('TSHIRT')
        .scan('MUG')
        .total();
      expect(co.totalTicket.price).toBe(32.5)
    })

    it("[A] user [I] check the total of: VOUCHER, TSHIRT, VOUCHER is 25.0€", () => {
      co.scan('VOUCHER')
        .scan('TSHIRT')
        .scan('VOUCHER')
        .total();
      expect(co.totalTicket.price).toBe(25.0)
    })

    it("[A] user [I] check the total of: TSHIRT, TSHIRT, TSHIRT, VOUCHER, TSHIRT is 81.0€", () => {
      co.scan('TSHIRT')
        .scan('TSHIRT')
        .scan('TSHIRT')
        .scan('VOUCHER')
        .scan('TSHIRT')
        .total();
      expect(co.totalTicket.price).toBe(81.0)
    })

    it("[A] user [I] check the total of: VOUCHER, TSHIRT, VOUCHER, VOUCHER, MUG, TSHIRT, TSHIRT is 74.5€", () => {
      co.scan('VOUCHER')
        .scan('TSHIRT')
        .scan('VOUCHER')
        .scan('VOUCHER')
        .scan('MUG')
        .scan('TSHIRT')
        .scan('TSHIRT')
        .total();
      expect(co.totalTicket.price).toBe(74.5)
    })
  })
})