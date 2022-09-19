export = GetSellerResponse;
/**
 * Creates an instance of GetSellerResponse
 */
declare class GetSellerResponse extends BaseModel {
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
    name: any;
    code: any;
    document: any;
    description: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    address: any;
    metadata: any;
    deletedAt: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetSellerResponse.d.ts.map