export = UpdateChargePaymentMethodRequest;
/**
 * Creates an instance of UpdateChargePaymentMethodRequest
 */
declare class UpdateChargePaymentMethodRequest extends BaseModel {
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
    updateSubscription: any;
    paymentMethod: any;
    creditCard: any;
    debitCard: any;
    boleto: any;
    voucher: any;
    cash: any;
    bankTransfer: any;
    privateLabel: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateChargePaymentMethodRequest.d.ts.map