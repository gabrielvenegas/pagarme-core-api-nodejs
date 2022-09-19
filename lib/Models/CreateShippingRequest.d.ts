export = CreateShippingRequest;
/**
 * Creates an instance of CreateShippingRequest
 */
declare class CreateShippingRequest extends BaseModel {
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
    amount: any;
    description: any;
    recipientName: any;
    recipientPhone: any;
    addressId: any;
    address: any;
    maxDeliveryDate: any;
    estimatedDeliveryDate: any;
    type: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateShippingRequest.d.ts.map