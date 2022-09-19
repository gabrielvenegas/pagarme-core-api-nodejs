export = GetBankAccountResponse;
/**
 * Creates an instance of GetBankAccountResponse
 */
declare class GetBankAccountResponse extends BaseModel {
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
    id: any;
    holderName: any;
    holderType: any;
    bank: any;
    branchNumber: any;
    branchCheckDigit: any;
    accountNumber: any;
    accountCheckDigit: any;
    type: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    deletedAt: any;
    recipient: any;
    metadata: any;
    pixKey: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetBankAccountResponse.d.ts.map