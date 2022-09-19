export = CreateConfirmPaymentRequest;
/**
 * Creates an instance of CreateConfirmPaymentRequest
 */
declare class CreateConfirmPaymentRequest extends BaseModel {
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
    amount: any;
    code: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateConfirmPaymentRequest.d.ts.map