export = UpdateSubscriptionPaymentMethodRequest;
/**
 * Creates an instance of UpdateSubscriptionPaymentMethodRequest
 */
declare class UpdateSubscriptionPaymentMethodRequest extends BaseModel {
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
    cardId: any;
    card: any;
    cardToken: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateSubscriptionPaymentMethodRequest.d.ts.map