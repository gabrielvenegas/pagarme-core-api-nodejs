export = GetPhonesResponse;
/**
 * Creates an instance of GetPhonesResponse
 */
declare class GetPhonesResponse extends BaseModel {
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
    homePhone: any;
    mobilePhone: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetPhonesResponse.d.ts.map