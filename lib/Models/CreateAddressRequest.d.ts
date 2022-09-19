export = CreateAddressRequest;
/**
 * Creates an instance of CreateAddressRequest
 */
declare class CreateAddressRequest extends BaseModel {
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
    street: any;
    number: any;
    zipCode: any;
    neighborhood: any;
    city: any;
    state: any;
    country: any;
    complement: any;
    metadata: any;
    line1: any;
    line2: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateAddressRequest.d.ts.map