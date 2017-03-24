import { Price } from './price';
import { EnumOrderStatus, EnumConditions } from './enums'

export class Order {;
  constructor(public id: number, public price: Price,
    public orderStatusType: EnumOrderStatus,
    public itemType: EnumConditions,
    public deliveryDate: Date,
    public colorChoices: Array<number>) {

  }
}
