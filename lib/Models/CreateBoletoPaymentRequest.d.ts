export = CreateBoletoPaymentRequest;
/**
 * Creates an instance of CreateBoletoPaymentRequest
 */
declare class CreateBoletoPaymentRequest extends BaseModel {
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
    retries: any;
    bank: any;
    instructions: any;
    dueAt: any;
    billingAddress: any;
    billingAddressId: any;
    nossoNumero: any;
    documentNumber: any;
    statementDescriptor: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateBoletoPaymentRequest.d.ts.map