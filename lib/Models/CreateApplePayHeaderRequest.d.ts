export = CreateApplePayHeaderRequest;
/**
 * Creates an instance of CreateApplePayHeaderRequest
 */
declare class CreateApplePayHeaderRequest extends BaseModel {
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
    publicKeyHash: any;
    ephemeralPublicKey: any;
    transactionId: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateApplePayHeaderRequest.d.ts.map