export = CreateCheckoutPaymentRequest;
/**
 * Creates an instance of CreateCheckoutPaymentRequest
 */
declare class CreateCheckoutPaymentRequest extends BaseModel {
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
    acceptedPaymentMethods: any;
    acceptedMultiPaymentMethods: any;
    successUrl: any;
    defaultPaymentMethod: any;
    gatewayAffiliationId: any;
    creditCard: any;
    debitCard: any;
    boleto: any;
    customerEditable: any;
    expiresIn: any;
    skipCheckoutSuccessPage: any;
    billingAddressEditable: any;
    billingAddress: any;
    bankTransfer: any;
    acceptedBrands: any;
    pix: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateCheckoutPaymentRequest.d.ts.map