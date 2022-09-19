export = UpdateCardRequest;
/**
 * Creates an instance of UpdateCardRequest
 */
declare class UpdateCardRequest extends BaseModel {
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
    holderName: any;
    expMonth: any;
    expYear: any;
    billingAddressId: any;
    billingAddress: any;
    metadata: any;
    label: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateCardRequest.d.ts.map