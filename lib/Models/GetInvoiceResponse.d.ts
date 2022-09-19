export = GetInvoiceResponse;
/**
 * Creates an instance of GetInvoiceResponse
 */
declare class GetInvoiceResponse extends BaseModel {
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
    url: any;
    amount: any;
    status: any;
    paymentMethod: any;
    createdAt: any;
    items: any;
    customer: any;
    charge: any;
    installments: any;
    billingAddress: any;
    subscription: any;
    cycle: any;
    shipping: any;
    metadata: any;
    dueAt: any;
    canceledAt: any;
    billingAt: any;
    seenAt: any;
    totalDiscount: any;
    totalIncrement: any;
    subscriptionId: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetInvoiceResponse.d.ts.map