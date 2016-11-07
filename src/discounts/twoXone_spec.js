/* eslint-disable */
import twoXone from './twoXone.js';
import Item from '../models/item.js'

describe("Testing twoXone function", function() {

  it("Check twoXone is a function", () => {
    expect(twoXone).not.toBe(null);
    expect(twoXone).toEqual(jasmine.any(Function));
  })

  it("Check twoXone discount is applied", () => {
    let articles = [];
    
    articles.push(new Item('VOUCHER'))
    twoXone(articles);
 
    expect(articles[0].price).toBe(5.)

    articles.push(new Item('VOUCHER'))
    twoXone(articles);

    expect(articles[1].price).toBe(0.)
  })

});