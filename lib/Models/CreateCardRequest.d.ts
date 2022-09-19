export = CreateCardRequest;
/**
 * Creates an instance of CreateCardRequest
 */
declare class CreateCardRequest extends BaseModel {
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
    number: any;
    holderName: any;
    expMonth: any;
    expYear: any;
    cvv: any;
    billingAddress: any;
    brand: any;
    billingAddressId: any;
    metadata: any;
    type: any;
    options: any;
    holderDocument: any;
    privateLabel: any;
    label: any;
    id: any;
    token: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCardRequest.d.ts.map