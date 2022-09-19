export = CreateCheckoutBoletoPaymentRequest;
/**
 * Creates an instance of CreateCheckoutBoletoPaymentRequest
 */
declare class CreateCheckoutBoletoPaymentRequest extends BaseModel {
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
    bank: any;
    instructions: any;
    dueAt: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCheckoutBoletoPaymentRequest.d.ts.map