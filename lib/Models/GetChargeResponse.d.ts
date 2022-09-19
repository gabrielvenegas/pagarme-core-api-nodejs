export = GetChargeResponse;
/**
 * Creates an instance of GetChargeResponse
 */
declare class GetChargeResponse extends BaseModel {
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
    gatewayId: any;
    amount: any;
    status: any;
    currency: any;
    paymentMethod: any;
    dueAt: any;
    createdAt: any;
    updatedAt: any;
    lastTransaction: any;
    invoice: any;
    order: any;
    customer: any;
    metadata: any;
    paidAt: any;
    canceledAt: any;
    canceledAmount: any;
    paidAmount: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetChargeResponse.d.ts.map