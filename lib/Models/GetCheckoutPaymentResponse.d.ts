export = GetCheckoutPaymentResponse;
/**
 * Creates an instance of GetCheckoutPaymentResponse
 */
declare class GetCheckoutPaymentResponse extends BaseModel {
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
    amount: any;
    defaultPaymentMethod: any;
    successUrl: any;
    paymentUrl: any;
    gatewayAffiliationId: any;
    acceptedPaymentMethods: any;
    status: any;
    skipCheckoutSuccessPage: any;
    createdAt: any;
    updatedAt: any;
    canceledAt: any;
    customerEditable: any;
    customer: any;
    billingaddress: any;
    creditCard: any;
    boleto: any;
    billingAddressEditable: any;
    shipping: any;
    shippable: any;
    closedAt: any;
    expiresAt: any;
    currency: any;
    debitCard: any;
    bankTransfer: any;
    acceptedBrands: any;
    pix: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetCheckoutPaymentResponse.d.ts.map