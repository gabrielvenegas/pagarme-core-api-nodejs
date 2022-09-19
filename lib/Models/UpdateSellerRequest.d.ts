export = UpdateSellerRequest;
/**
 * Creates an instance of UpdateSellerRequest
 */
declare class UpdateSellerRequest extends BaseModel {
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
    code: any;
    description: any;
    document: any;
    status: any;
    type: any;
    address: any;
    metadata: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateSellerRequest.d.ts.map