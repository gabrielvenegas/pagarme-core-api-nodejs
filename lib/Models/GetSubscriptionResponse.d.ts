export = GetSubscriptionResponse;
/**
 * Creates an instance of GetSubscriptionResponse
 */
declare class GetSubscriptionResponse extends BaseModel {
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
    code: any;
    startAt: any;
    interval: any;
    intervalCount: any;
    billingType: any;
    currentCycle: any;
    paymentMethod: any;
    currency: any;
    installments: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    customer: any;
    card: any;
    items: any;
    statementDescriptor: any;
    metadata: any;
    setup: any;
    gatewayAffiliationId: any;
    nextBillingAt: any;
    billingDay: any;
    minimumPrice: any;
    canceledAt: any;
    discounts: any;
    increments: any;
    boletoDueDays: any;
    split: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetSubscriptionResponse.d.ts.map