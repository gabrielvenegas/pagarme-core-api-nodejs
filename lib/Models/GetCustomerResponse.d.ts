export = GetCustomerResponse;
/**
 * Creates an instance of GetCustomerResponse
 */
declare class GetCustomerResponse extends BaseModel {
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
    email: any;
    delinquent: any;
    createdAt: any;
    updatedAt: any;
    document: any;
    type: any;
    fbAccessToken: any;
    address: any;
    metadata: any;
    phones: any;
    fbId: any;
    code: any;
    documentType: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetCustomerResponse.d.ts.map