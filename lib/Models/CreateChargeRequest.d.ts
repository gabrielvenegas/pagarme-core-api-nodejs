export = CreateChargeRequest;
/**
 * Creates an instance of CreateChargeRequest
 */
declare class CreateChargeRequest extends BaseModel {
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
    code: any;
    amount: any;
    customerId: any;
    customer: any;
    payment: any;
    metadata: any;
    dueAt: any;
    antifraud: any;
    orderId: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateChargeRequest.d.ts.map