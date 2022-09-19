export = UpdateRecipientBankAccountRequest;
/**
 * Creates an instance of UpdateRecipientBankAccountRequest
 */
declare class UpdateRecipientBankAccountRequest extends BaseModel {
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
    bankAccount: any;
    paymentMode: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateRecipientBankAccountRequest.d.ts.map