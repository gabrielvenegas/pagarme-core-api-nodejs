export = GetTokenResponse;
/**
 * Creates an instance of GetTokenResponse
 */
declare class GetTokenResponse extends BaseModel {
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
    type: any;
    createdAt: any;
    expiresAt: any;
    card: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetTokenResponse.d.ts.map