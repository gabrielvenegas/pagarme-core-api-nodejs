export = CreateSubscriptionRequest;
/**
 * Creates an instance of CreateSubscriptionRequest
 */
declare class CreateSubscriptionRequest extends BaseModel {
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
    customer: any;
    card: any;
    code: any;
    paymentMethod: any;
    billingType: any;
    statementDescriptor: any;
    description: any;
    currency: any;
    interval: any;
    intervalCount: any;
    pricingScheme: any;
    items: any;
    shipping: any;
    discounts: any;
    metadata: any;
    setup: any;
    planId: any;
    customerId: any;
    cardId: any;
    billingDay: any;
    installments: any;
    startAt: any;
    minimumPrice: any;
    cycles: any;
    cardToken: any;
    gatewayAffiliationId: any;
    quantity: any;
    boletoDueDays: any;
    increments: any;
    period: any;
    submerchant: any;
    split: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateSubscriptionRequest.d.ts.map