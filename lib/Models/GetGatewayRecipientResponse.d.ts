export = GetGatewayRecipientResponse;
/**
 * Creates an instance of GetGatewayRecipientResponse
 */
declare class GetGatewayRecipientResponse extends BaseModel {
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
    gateway: any;
    status: any;
    pgid: any;
    createdAt: any;
    updatedAt: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetGatewayRecipientResponse.d.ts.map