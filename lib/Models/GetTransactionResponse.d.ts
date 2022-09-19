export = GetTransactionResponse;
/**
 * Creates an instance of GetTransactionResponse
 */
declare class GetTransactionResponse extends BaseModel {
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
    gatewayId: any;
    amount: any;
    status: any;
    success: any;
    createdAt: any;
    updatedAt: any;
    attemptCount: any;
    maxAttempts: any;
    splits: any;
    nextAttempt: any;
    transactionType: any;
    id: any;
    gatewayResponse: any;
    antifraudResponse: any;
    metadata: any;
    split: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetTransactionResponse.d.ts.map