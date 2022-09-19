export = GetRecipientResponse;
/**
 * Creates an instance of GetRecipientResponse
 */
declare class GetRecipientResponse extends BaseModel {
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
    name: any;
    email: any;
    document: any;
    description: any;
    type: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    deletedAt: any;
    defaultBankAccount: any;
    gatewayRecipients: any;
    metadata: any;
    automaticAnticipationSettings: any;
    transferSettings: any;
    code: any;
    paymentMode: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetRecipientResponse.d.ts.map