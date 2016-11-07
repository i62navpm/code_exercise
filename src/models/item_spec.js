/* eslint-disable */
import Item from './item.js';

describe("Testing Item object", function() {
  let item = new Item('VOUCHER');

  it("Check Item is a object", () => {
    expect(item).not.toBe(null);
    expect(item).toEqual(jasmine.any(Object));
    expect(item.id).toEqual(jasmine.any(String));
    expect(item.name).toEqual(jasmine.any(String));
    expect(item.price).toEqual(jasmine.any(Number));
  })

});