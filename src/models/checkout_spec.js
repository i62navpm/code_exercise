/* eslint-disable */

import Checkout    from './checkout.js';
import twoXone from '../discounts/twoXone.js';
import bulk    from '../discounts/bulk.js';

describe("Testing Checkout object", () => {
  let co;
  const discounts = {
    'VOUCHER': twoXone,
    'TSHIRT': bulk
  };
  beforeEach(() => {
    co = new Checkout(discounts);
  })

  describe("Examples", () => {
    it("should return 32.50€ when scanning VOUCHER, TSHIRT, MUG", () => {
      co.scan('VOUCHER')
        .scan('TSHIRT')
        .total();
      expect(co.totalTicket.price).toBe(25.)
    })
  })
})