export = CreateCustomerRequest;
/**
 * Creates an instance of CreateCustomerRequest
 */
declare class CreateCustomerRequest extends BaseModel {
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
    email: any;
    document: any;
    type: any;
    address: any;
    metadata: any;
    phones: any;
    code: any;
    gender: any;
    documentType: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCustomerRequest.d.ts.map