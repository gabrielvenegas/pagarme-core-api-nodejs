export = GetSellersRequest;
/**
 * Creates an instance of GetSellersRequest
 */
declare class GetSellersRequest extends BaseModel {
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
    code: any;
    status: any;
    type: any;
    createdSince: any;
    createdUntil: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetSellersRequest.d.ts.map