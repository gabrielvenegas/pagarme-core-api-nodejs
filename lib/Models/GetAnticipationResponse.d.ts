export = GetAnticipationResponse;
/**
 * Creates an instance of GetAnticipationResponse
 */
declare class GetAnticipationResponse extends BaseModel {
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
    requestedAmount: any;
    approvedAmount: any;
    recipient: any;
    pgid: any;
    createdAt: any;
    updatedAt: any;
    paymentDate: any;
    status: any;
    timeframe: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetAnticipationResponse.d.ts.map