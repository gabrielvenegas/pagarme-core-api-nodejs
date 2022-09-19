export = UpdatePlanItemRequest;
/**
 * Creates an instance of UpdatePlanItemRequest
 */
declare class UpdatePlanItemRequest extends BaseModel {
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
    name: any;
    description: any;
    status: any;
    pricingScheme: any;
    quantity: any;
    cycles: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdatePlanItemRequest.d.ts.map