export = CreatePlanRequest;
/**
 * Creates an instance of CreatePlanRequest
 */
declare class CreatePlanRequest extends BaseModel {
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
    name: any;
    description: any;
    statementDescriptor: any;
    items: any;
    shippable: any;
    paymentMethods: any;
    installments: any;
    currency: any;
    interval: any;
    intervalCount: any;
    billingDays: any;
    billingType: any;
    pricingScheme: any;
    metadata: any;
    minimumPrice: any;
    cycles: any;
    quantity: any;
    trialPeriodDays: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreatePlanRequest.d.ts.map