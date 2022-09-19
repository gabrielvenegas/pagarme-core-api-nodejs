export = CreateCardPaymentContactlessPOIRequest;
/**
 * Creates an instance of CreateCardPaymentContactlessPOIRequest
 */
declare class CreateCardPaymentContactlessPOIRequest extends BaseModel {
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
    systemName: any;
    model: any;
    provider: any;
    serialNumber: any;
    versionNumber: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCardPaymentContactlessPOIRequest.d.ts.map