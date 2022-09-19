export = CreateCardPaymentContactlessRequest;
/**
 * Creates an instance of CreateCardPaymentContactlessRequest
 */
declare class CreateCardPaymentContactlessRequest extends BaseModel {
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
    type: any;
    applePay: any;
    googlePay: any;
    emv: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCardPaymentContactlessRequest.d.ts.map