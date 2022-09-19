export = UpdateRecipientRequest;
/**
 * Creates an instance of UpdateRecipientRequest
 */
declare class UpdateRecipientRequest extends BaseModel {
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
    name: any;
    email: any;
    description: any;
    type: any;
    status: any;
    metadata: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateRecipientRequest.d.ts.map