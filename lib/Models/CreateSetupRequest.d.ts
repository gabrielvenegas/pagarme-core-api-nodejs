export = CreateSetupRequest;
/**
 * Creates an instance of CreateSetupRequest
 */
declare class CreateSetupRequest extends BaseModel {
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
    amount: any;
    description: any;
    payment: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateSetupRequest.d.ts.map