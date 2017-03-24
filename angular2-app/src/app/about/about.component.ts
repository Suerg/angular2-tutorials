import { Component } from '@angular/core';
import { Person } from '../models/person'
import { Order } from '../models/order';
import { Price } from '../models/price';
import { EnumOrderStatus, EnumConditions } from '../models/enums'

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
})
export class AboutComponent {
  public name: string = 'James';
  public show: boolean = false;
  public myNumbers: Array<number>;
  public myPersons: Array<Person> = [];
  public order: Order;

  constructor() {

  }

  public ngOnInit() {
    this.myNumbers = [10, 20, 30, 40, 50];
    this.myPersons.push(new Person('James', 10));
    this.myPersons.push(new Person('Mike', 20));
  }

  public checkNumber(myNumber: number): number {
    return myNumber + 10;
  }

  public changeShow() {
    this.show = !this.show;
  }

  public createOrder(): Order {
    let price: Price = new Price(44, 'abc');
    this.order = new Order(4, price, EnumOrderStatus.InProgress,
      EnumConditions.New, new Date(), [3,4,5]
    );
    return this.order;
  }

}
