export = GetCheckoutPaymentSettingsResponse;
/**
 * Creates an instance of GetCheckoutPaymentSettingsResponse
 */
declare class GetCheckoutPaymentSettingsResponse extends BaseModel {
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
    successUrl: any;
    paymentUrl: any;
    acceptedPaymentMethods: any;
    status: any;
    customer: any;
    amount: any;
    defaultPaymentMethod: any;
    gatewayAffiliationId: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetCheckoutPaymentSettingsResponse.d.ts.map