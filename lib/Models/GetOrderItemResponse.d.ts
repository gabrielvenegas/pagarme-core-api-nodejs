export = GetOrderItemResponse;
/**
 * Creates an instance of GetOrderItemResponse
 */
declare class GetOrderItemResponse extends BaseModel {
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
    amount: any;
    description: any;
    quantity: any;
    category: any;
    code: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetOrderItemResponse.d.ts.map