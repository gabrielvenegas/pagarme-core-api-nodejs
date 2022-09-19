export = CreateCreditCardPaymentRequest;
/**
 * Creates an instance of CreateCreditCardPaymentRequest
 */
declare class CreateCreditCardPaymentRequest extends BaseModel {
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
    installments: any;
    statementDescriptor: any;
    card: any;
    cardId: any;
    cardToken: any;
    recurrence: any;
    capture: any;
    extendedLimitEnabled: any;
    extendedLimitCode: any;
    merchantCategoryCode: any;
    authentication: any;
    contactless: any;
    autoRecovery: any;
    operationType: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCreditCardPaymentRequest.d.ts.map