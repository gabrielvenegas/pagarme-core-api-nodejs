export = UpdateChargeDueDateRequest;
/**
 * Creates an instance of UpdateChargeDueDateRequest
 */
declare class UpdateChargeDueDateRequest extends BaseModel {
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
    dueAt: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateChargeDueDateRequest.d.ts.map