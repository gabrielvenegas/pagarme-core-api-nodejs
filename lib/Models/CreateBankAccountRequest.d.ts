export = CreateBankAccountRequest;
/**
 * Creates an instance of CreateBankAccountRequest
 */
declare class CreateBankAccountRequest extends BaseModel {
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
    holderName: any;
    holderType: any;
    holderDocument: any;
    bank: any;
    branchNumber: any;
    branchCheckDigit: any;
    accountNumber: any;
    accountCheckDigit: any;
    type: any;
    metadata: any;
    pixKey: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateBankAccountRequest.d.ts.map