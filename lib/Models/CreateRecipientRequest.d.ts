export = CreateRecipientRequest;
/**
 * Creates an instance of CreateRecipientRequest
 */
declare class CreateRecipientRequest extends BaseModel {
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
    document: any;
    type: any;
    defaultBankAccount: any;
    metadata: any;
    transferSettings: any;
    code: any;
    paymentMode: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateRecipientRequest.d.ts.map