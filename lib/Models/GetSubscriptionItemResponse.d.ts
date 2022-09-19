export = GetSubscriptionItemResponse;
/**
 * Creates an instance of GetSubscriptionItemResponse
 */
declare class GetSubscriptionItemResponse extends BaseModel {
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
    id: any;
    description: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    pricingScheme: any;
    discounts: any;
    increments: any;
    subscription: any;
    name: any;
    quantity: any;
    cycles: any;
    deletedAt: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetSubscriptionItemResponse.d.ts.map