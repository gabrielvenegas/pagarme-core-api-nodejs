export = GetDiscountResponse;
/**
 * Creates an instance of GetDiscountResponse
 */
declare class GetDiscountResponse extends BaseModel {
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
    value: any;
    discountType: any;
    status: any;
    createdAt: any;
    cycles: any;
    deletedAt: any;
    description: any;
    subscription: any;
    subscriptionItem: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetDiscountResponse.d.ts.map