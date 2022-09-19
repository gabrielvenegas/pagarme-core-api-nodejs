export = GetCardResponse;
/**
 * Creates an instance of GetCardResponse
 */
declare class GetCardResponse extends BaseModel {
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
    lastFourDigits: any;
    brand: any;
    holderName: any;
    expMonth: any;
    expYear: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    billingAddress: any;
    customer: any;
    metadata: any;
    type: any;
    holderDocument: any;
    deletedAt: any;
    firstSixDigits: any;
    label: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetCardResponse.d.ts.map