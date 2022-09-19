export = CreateOrderRequest;
/**
 * Creates an instance of CreateOrderRequest
 */
declare class CreateOrderRequest extends BaseModel {
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
    items: any;
    customer: any;
    payments: any;
    code: any;
    customerId: any;
    shipping: any;
    metadata: any;
    antifraudEnabled: any;
    ip: any;
    sessionId: any;
    location: any;
    device: any;
    closed: any;
    currency: any;
    antifraud: any;
    submerchant: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateOrderRequest.d.ts.map