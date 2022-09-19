export = GetThreeDSecureResponse;
/**
 * Creates an instance of GetThreeDSecureResponse
 */
declare class GetThreeDSecureResponse extends BaseModel {
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
    eci: any;
    cavv: any;
    transactionId: any;
    successUrl: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetThreeDSecureResponse.d.ts.map