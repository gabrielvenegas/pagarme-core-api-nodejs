export = CreateCheckoutCreditCardPaymentRequest;
/**
 * Creates an instance of CreateCheckoutCreditCardPaymentRequest
 */
declare class CreateCheckoutCreditCardPaymentRequest extends BaseModel {
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
    installments: any;
    authentication: any;
    capture: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCheckoutCreditCardPaymentRequest.d.ts.map