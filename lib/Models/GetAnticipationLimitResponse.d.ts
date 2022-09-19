export = GetAnticipationLimitResponse;
/**
 * Creates an instance of GetAnticipationLimitResponse
 */
declare class GetAnticipationLimitResponse extends BaseModel {
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
    anticipationFee: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetAnticipationLimitResponse.d.ts.map