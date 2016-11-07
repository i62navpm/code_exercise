export default class Item {
  constructor(id) {
    this.id = id;
    
    switch(this.id) {
      case 'VOUCHER':
        this.name  = 'Cabify Voucher';
        this.price = 5.;
        break;
      case 'TSHIRT':
        this.name  = 'Cabify T-Shirt';
        this.price = 20.;
        break;
      case 'MUG':
        this.name  = 'Cafify Coffee Mug';
        this.price = 7.5;
        break;
    }
    
  }
}