export = CreateUsageRequest;
/**
 * Creates an instance of CreateUsageRequest
 */
declare class CreateUsageRequest extends BaseModel {
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
    quantity: any;
    description: any;
    usedAt: any;
    code: any;
    group: any;
    amount: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateUsageRequest.d.ts.map