export = GetWithdrawSourceResponse;
/**
 * Creates an instance of GetWithdrawSourceResponse
 */
declare class GetWithdrawSourceResponse extends BaseModel {
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
    sourceId: any;
    type: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetWithdrawSourceResponse.d.ts.map