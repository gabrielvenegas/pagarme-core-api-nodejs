export = GetTransfer;
/**
 * Creates an instance of GetTransfer
 */
declare class GetTransfer extends BaseModel {
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
    gatewayId: any;
    amount: any;
    status: any;
    createdAt: any;
    updatedAt: any;
    metadata: any;
    fee: any;
    fundingDate: any;
    fundingEstimatedDate: any;
    type: any;
    source: any;
    target: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetTransfer.d.ts.map