export = UpdatePlanRequest;
/**
 * Creates an instance of UpdatePlanRequest
 */
declare class UpdatePlanRequest extends BaseModel {
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
    installments: any;
    statementDescriptor: any;
    currency: any;
    interval: any;
    intervalCount: any;
    paymentMethods: any;
    billingType: any;
    status: any;
    shippable: any;
    billingDays: any;
    metadata: any;
    minimumPrice: any;
    trialPeriodDays: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdatePlanRequest.d.ts.map