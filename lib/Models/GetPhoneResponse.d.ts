export = GetPhoneResponse;
/**
 * Creates an instance of GetPhoneResponse
 */
declare class GetPhoneResponse extends BaseModel {
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
    countryCode: any;
    number: any;
    areaCode: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetPhoneResponse.d.ts.map