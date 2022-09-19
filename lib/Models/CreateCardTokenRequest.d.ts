export = CreateCardTokenRequest;
/**
 * Creates an instance of CreateCardTokenRequest
 */
declare class CreateCardTokenRequest extends BaseModel {
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
    brand: any;
    label: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCardTokenRequest.d.ts.map