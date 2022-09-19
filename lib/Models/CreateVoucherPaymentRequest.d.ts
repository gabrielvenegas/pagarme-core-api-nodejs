export = CreateVoucherPaymentRequest;
/**
 * Creates an instance of CreateVoucherPaymentRequest
 */
declare class CreateVoucherPaymentRequest extends BaseModel {
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
    cardId: any;
    cardToken: any;
    card: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateVoucherPaymentRequest.d.ts.map