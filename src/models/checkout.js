import Item from './item.js';

export default class Checkout {
  constructor(pricingRules) {
    this.pricingRules = pricingRules;
    this.articles     = [];
    this.totalTicket  = 0;
  }

  scan(id) {
    this.articles.push(new Item(id));
    
    return this;
  }

  applyDiscounts() {
    for(let disc in this.pricingRules) { 
      this.pricingRules[disc](this.articles.filter((item) => item.id === disc));
    }
  }

  printTicket() {
    console.log(`
    Items: ${this.articles.map((item) => item.id)}
    Total: ${this.totalTicket.price.toLocaleString()}
    `);
  }

  total() {
    this.applyDiscounts();
    this.totalTicket = this.articles.reduce((previous, current) => {return {price: previous.price + current.price};});
    this.printTicket();
  }  
}