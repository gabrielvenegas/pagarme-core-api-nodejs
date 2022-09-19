export = GetSetupResponse;
/**
 * Creates an instance of GetSetupResponse
 */
declare class GetSetupResponse extends BaseModel {
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
    description: any;
    amount: any;
    status: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetSetupResponse.d.ts.map