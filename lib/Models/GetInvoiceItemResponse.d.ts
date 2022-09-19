export = GetInvoiceItemResponse;
/**
 * Creates an instance of GetInvoiceItemResponse
 */
declare class GetInvoiceItemResponse extends BaseModel {
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
    pricingScheme: any;
    priceBracket: any;
    quantity: any;
    name: any;
    subscriptionItemId: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetInvoiceItemResponse.d.ts.map