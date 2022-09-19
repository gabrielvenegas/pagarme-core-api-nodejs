export = UpdatePricingSchemeRequest;
/**
 * Creates an instance of UpdatePricingSchemeRequest
 */
declare class UpdatePricingSchemeRequest extends BaseModel {
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
    schemeType: any;
    priceBrackets: any;
    price: any;
    minimumPrice: any;
    percentage: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdatePricingSchemeRequest.d.ts.map