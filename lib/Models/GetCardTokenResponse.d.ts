export = GetCardTokenResponse;
/**
 * Creates an instance of GetCardTokenResponse
 */
declare class GetCardTokenResponse extends BaseModel {
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
    lastFourDigits: any;
    holderName: any;
    holderDocument: any;
    expMonth: any;
    expYear: any;
    brand: any;
    type: any;
    label: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetCardTokenResponse.d.ts.map