export = GetPlanResponse;
/**
 * Creates an instance of GetPlanResponse
 */
declare class GetPlanResponse extends BaseModel {
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
    name: any;
    description: any;
    url: any;
    statementDescriptor: any;
    interval: any;
    intervalCount: any;
    billingType: any;
    paymentMethods: any;
    installments: any;
    status: any;
    currency: any;
    createdAt: any;
    updatedAt: any;
    items: any;
    billingDays: any;
    shippable: any;
    metadata: any;
    trialPeriodDays: any;
    minimumPrice: any;
    deletedAt: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetPlanResponse.d.ts.map