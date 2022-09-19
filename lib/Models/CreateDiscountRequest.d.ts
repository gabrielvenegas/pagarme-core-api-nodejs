export = CreateDiscountRequest;
/**
 * Creates an instance of CreateDiscountRequest
 */
declare class CreateDiscountRequest extends BaseModel {
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
    value: any;
    discountType: any;
    itemId: any;
    cycles: any;
    description: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateDiscountRequest.d.ts.map