export = CancelSplitRequest;
/**
 * Creates an instance of CancelSplitRequest
 */
declare class CancelSplitRequest extends BaseModel {
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
    recipientId: any;
    options: any;
    splitRuleId: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CancelSplitRequest.d.ts.map