export = GetPixPayerResponse;
/**
 * Creates an instance of GetPixPayerResponse
 */
declare class GetPixPayerResponse extends BaseModel {
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
    name: any;
    document: any;
    documentType: any;
    bankAccount: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetPixPayerResponse.d.ts.map