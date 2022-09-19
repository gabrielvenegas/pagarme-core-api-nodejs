export = UpdateSubscriptionItemRequest;
/**
 * Creates an instance of UpdateSubscriptionItemRequest
 */
declare class UpdateSubscriptionItemRequest extends BaseModel {
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
    status: any;
    pricingScheme: any;
    name: any;
    cycles: any;
    quantity: any;
    minimumPrice: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateSubscriptionItemRequest.d.ts.map