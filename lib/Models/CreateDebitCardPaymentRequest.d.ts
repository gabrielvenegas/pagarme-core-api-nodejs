export = CreateDebitCardPaymentRequest;
/**
 * Creates an instance of CreateDebitCardPaymentRequest
 */
declare class CreateDebitCardPaymentRequest extends BaseModel {
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
    card: any;
    cardId: any;
    cardToken: any;
    recurrence: any;
    authentication: any;
    token: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateDebitCardPaymentRequest.d.ts.map