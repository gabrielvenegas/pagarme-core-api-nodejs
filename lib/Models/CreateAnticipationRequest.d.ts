export = CreateAnticipationRequest;
/**
 * Creates an instance of CreateAnticipationRequest
 */
declare class CreateAnticipationRequest extends BaseModel {
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
    amount: any;
    timeframe: any;
    paymentDate: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateAnticipationRequest.d.ts.map