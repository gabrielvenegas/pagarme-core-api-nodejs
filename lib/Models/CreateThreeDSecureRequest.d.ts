export = CreateThreeDSecureRequest;
/**
 * Creates an instance of CreateThreeDSecureRequest
 */
declare class CreateThreeDSecureRequest extends BaseModel {
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
    mpi: any;
    cavv: any;
    eci: any;
    transactionId: any;
    successUrl: any;
    dsTransactionId: any;
    version: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateThreeDSecureRequest.d.ts.map