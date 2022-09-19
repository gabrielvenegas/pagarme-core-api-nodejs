export = CreateCheckoutDebitCardPaymentRequest;
/**
 * Creates an instance of CreateCheckoutDebitCardPaymentRequest
 */
declare class CreateCheckoutDebitCardPaymentRequest extends BaseModel {
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
    statementDescriptor: any;
    authentication: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCheckoutDebitCardPaymentRequest.d.ts.map