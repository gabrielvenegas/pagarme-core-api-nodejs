export = CreatePlanItemRequest;
/**
 * Creates an instance of CreatePlanItemRequest
 */
declare class CreatePlanItemRequest extends BaseModel {
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
    pricingScheme: any;
    id: any;
    description: any;
    cycles: any;
    quantity: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreatePlanItemRequest.d.ts.map