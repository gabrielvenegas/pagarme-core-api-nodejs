export = GetTransferResponse;
/**
 * Creates an instance of GetTransferResponse
 */
declare class GetTransferResponse extends BaseModel {
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
    amount: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    bankAccount: any;
    metadata: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetTransferResponse.d.ts.map