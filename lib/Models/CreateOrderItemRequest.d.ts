export = CreateOrderItemRequest;
/**
 * Creates an instance of CreateOrderItemRequest
 */
declare class CreateOrderItemRequest extends BaseModel {
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
    code: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateOrderItemRequest.d.ts.map