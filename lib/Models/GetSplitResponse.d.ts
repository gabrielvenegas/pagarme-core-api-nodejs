export = GetSplitResponse;
/**
 * Creates an instance of GetSplitResponse
 */
declare class GetSplitResponse extends BaseModel {
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
    type: any;
    amount: any;
    recipient: any;
    gatewayId: any;
    options: any;
    id: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetSplitResponse.d.ts.map