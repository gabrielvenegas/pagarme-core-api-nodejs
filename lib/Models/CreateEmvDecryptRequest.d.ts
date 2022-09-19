export = CreateEmvDecryptRequest;
/**
 * Creates an instance of CreateEmvDecryptRequest
 */
declare class CreateEmvDecryptRequest extends BaseModel {
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
    iccData: any;
    cardSequenceNumber: any;
    data: any;
    poi: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateEmvDecryptRequest.d.ts.map