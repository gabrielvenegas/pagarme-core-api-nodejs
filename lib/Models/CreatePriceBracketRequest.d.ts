export = CreatePriceBracketRequest;
/**
 * Creates an instance of CreatePriceBracketRequest
 */
declare class CreatePriceBracketRequest extends BaseModel {
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
    startQuantity: any;
    price: any;
    endQuantity: any;
    overagePrice: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreatePriceBracketRequest.d.ts.map