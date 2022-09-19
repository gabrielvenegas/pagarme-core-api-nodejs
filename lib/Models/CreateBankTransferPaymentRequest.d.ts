export = CreateBankTransferPaymentRequest;
/**
 * Creates an instance of CreateBankTransferPaymentRequest
 */
declare class CreateBankTransferPaymentRequest extends BaseModel {
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
    retries: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateBankTransferPaymentRequest.d.ts.map