export = GetUsagesDetailsResponse;
/**
 * Creates an instance of GetUsagesDetailsResponse
 */
declare class GetUsagesDetailsResponse extends BaseModel {
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
    subscriptionId: any;
    totalAmount: any;
    period: any;
    usages: any;
    totalDiscount: any;
    totalIncrement: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetUsagesDetailsResponse.d.ts.map