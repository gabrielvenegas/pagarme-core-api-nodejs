export = GetShippingResponse;
/**
 * Creates an instance of GetShippingResponse
 */
declare class GetShippingResponse extends BaseModel {
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
    address: any;
    maxDeliveryDate: any;
    estimatedDeliveryDate: any;
    type: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetShippingResponse.d.ts.map