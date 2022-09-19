export = CreatePaymentRequest;
/**
 * Creates an instance of CreatePaymentRequest
 */
declare class CreatePaymentRequest extends BaseModel {
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
    paymentMethod: any;
    creditCard: any;
    debitCard: any;
    boleto: any;
    currency: any;
    voucher: any;
    split: any;
    bankTransfer: any;
    gatewayAffiliationId: any;
    amount: any;
    checkout: any;
    customerId: any;
    customer: any;
    metadata: any;
    cash: any;
    privateLabel: any;
    pix: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreatePaymentRequest.d.ts.map