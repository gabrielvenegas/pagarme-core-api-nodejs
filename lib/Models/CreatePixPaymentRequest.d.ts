export = CreatePixPaymentRequest;
/**
 * Creates an instance of CreatePixPaymentRequest
 */
declare class CreatePixPaymentRequest extends BaseModel {
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
    expiresAt: any;
    expiresIn: any;
    additionalInformation: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreatePixPaymentRequest.d.ts.map