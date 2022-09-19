export = GetUsageResponse;
/**
 * Creates an instance of GetUsageResponse
 */
declare class GetUsageResponse extends BaseModel {
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
    quantity: any;
    description: any;
    usedAt: any;
    createdAt: any;
    status: any;
    deletedAt: any;
    subscriptionItem: any;
    code: any;
    group: any;
    amount: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetUsageResponse.d.ts.map