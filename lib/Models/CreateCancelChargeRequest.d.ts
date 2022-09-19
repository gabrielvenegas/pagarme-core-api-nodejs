export = CreateCancelChargeRequest;
/**
 * Creates an instance of CreateCancelChargeRequest
 */
declare class CreateCancelChargeRequest extends BaseModel {
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
    splitRules: any;
    split: any;
    operationReference: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCancelChargeRequest.d.ts.map