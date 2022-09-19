export = GetAntifraudResponse;
/**
 * Creates an instance of GetAntifraudResponse
 */
declare class GetAntifraudResponse extends BaseModel {
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
    status: any;
    returnCode: any;
    returnMessage: any;
    providerName: any;
    score: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetAntifraudResponse.d.ts.map