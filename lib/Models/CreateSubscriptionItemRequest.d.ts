export = CreateSubscriptionItemRequest;
/**
 * Creates an instance of CreateSubscriptionItemRequest
 */
declare class CreateSubscriptionItemRequest extends BaseModel {
    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap(): object;
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj: any);
    description: any;
    pricingScheme: any;
    id: any;
    planItemId: any;
    discounts: any;
    name: any;
    cycles: any;
    quantity: any;
    minimumPrice: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateSubscriptionItemRequest.d.ts.map