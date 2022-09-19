export = CreatePrivateLabelPaymentRequest;
/**
 * Creates an instance of CreatePrivateLabelPaymentRequest
 */
declare class CreatePrivateLabelPaymentRequest extends BaseModel {
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
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreatePrivateLabelPaymentRequest.d.ts.map