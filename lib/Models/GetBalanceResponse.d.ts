export = GetBalanceResponse;
/**
 * Creates an instance of GetBalanceResponse
 */
declare class GetBalanceResponse extends BaseModel {
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
    currency: any;
    availableAmount: any;
    recipient: any;
    transferredAmount: any;
    waitingFundsAmount: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetBalanceResponse.d.ts.map