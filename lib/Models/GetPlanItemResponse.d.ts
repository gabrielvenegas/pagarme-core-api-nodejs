export = GetPlanItemResponse;
/**
 * Creates an instance of GetPlanItemResponse
 */
declare class GetPlanItemResponse extends BaseModel {
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
    name: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    pricingScheme: any;
    description: any;
    plan: any;
    quantity: any;
    cycles: any;
    deletedAt: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetPlanItemResponse.d.ts.map