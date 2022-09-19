export = CreateSubMerchantRequest;
/**
 * Creates an instance of CreateSubMerchantRequest
 */
declare class CreateSubMerchantRequest extends BaseModel {
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
    paymentFacilitatorCode: any;
    code: any;
    name: any;
    merchantCategoryCode: any;
    document: any;
    type: any;
    phone: any;
    address: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateSubMerchantRequest.d.ts.map