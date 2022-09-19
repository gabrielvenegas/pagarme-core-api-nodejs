export = GetWithdrawTargetResponse;
/**
 * Creates an instance of GetWithdrawTargetResponse
 */
declare class GetWithdrawTargetResponse extends BaseModel {
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
    targetId: any;
    type: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetWithdrawTargetResponse.d.ts.map