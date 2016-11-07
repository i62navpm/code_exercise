/* eslint-disable */
import bulk from './bulk.js';
import Item from '../models/item.js'

describe("Testing bulk function", function() {

  it("Check bulk is a function", () => {
    expect(bulk).not.toBe(null);
    expect(bulk).toEqual(jasmine.any(Function));
  })

  it("Check bulk discount is applied", () => {
    let articles = [];
    
    articles.push(new Item('TSHIRT'))
    articles.push(new Item('TSHIRT'))
    bulk(articles);

    articles.map((item) => 
      expect(item.price).toBe(20.)
    )

    articles.push(new Item('TSHIRT'))
    bulk(articles);

    articles.map((item) => 
      expect(item.price).toBe(19.)
    )
  })

});