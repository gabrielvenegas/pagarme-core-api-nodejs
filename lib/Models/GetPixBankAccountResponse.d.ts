export = GetPixBankAccountResponse;
/**
 * Creates an instance of GetPixBankAccountResponse
 */
declare class GetPixBankAccountResponse extends BaseModel {
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
    bankName: any;
    ispb: any;
    branchCode: any;
    accountNumber: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetPixBankAccountResponse.d.ts.map