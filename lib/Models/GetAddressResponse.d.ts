export = GetAddressResponse;
/**
 * Creates an instance of GetAddressResponse
 */
declare class GetAddressResponse extends BaseModel {
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
    street: any;
    number: any;
    complement: any;
    zipCode: any;
    neighborhood: any;
    city: any;
    state: any;
    country: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    customer: any;
    metadata: any;
    line1: any;
    line2: any;
    deletedAt: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetAddressResponse.d.ts.map