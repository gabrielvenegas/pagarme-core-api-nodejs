export = UpdateOrderItemRequest;
/**
 * Creates an instance of UpdateOrderItemRequest
 */
declare class UpdateOrderItemRequest extends BaseModel {
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
    description: any;
    quantity: any;
    category: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateOrderItemRequest.d.ts.map