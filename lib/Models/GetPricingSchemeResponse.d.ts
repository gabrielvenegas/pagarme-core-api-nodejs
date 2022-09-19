export = GetPricingSchemeResponse;
/**
 * Creates an instance of GetPricingSchemeResponse
 */
declare class GetPricingSchemeResponse extends BaseModel {
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
    price: any;
    schemeType: any;
    priceBrackets: any;
    minimumPrice: any;
    percentage: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetPricingSchemeResponse.d.ts.map