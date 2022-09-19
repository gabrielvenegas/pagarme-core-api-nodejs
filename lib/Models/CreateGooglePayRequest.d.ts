export = CreateGooglePayRequest;
/**
 * Creates an instance of CreateGooglePayRequest
 */
declare class CreateGooglePayRequest extends BaseModel {
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
    version: any;
    data: any;
    header: any;
    signature: any;
    merchantIdentifier: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateGooglePayRequest.d.ts.map