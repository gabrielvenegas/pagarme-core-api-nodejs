export = GetOrderResponse;
/**
 * Creates an instance of GetOrderResponse
 */
declare class GetOrderResponse extends BaseModel {
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
    code: any;
    currency: any;
    items: any;
    customer: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    charges: any;
    invoiceUrl: any;
    shipping: any;
    metadata: any;
    checkouts: any;
    ip: any;
    sessionId: any;
    location: any;
    device: any;
    closed: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetOrderResponse.d.ts.map