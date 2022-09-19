export = GetIncrementResponse;
/**
 * Creates an instance of GetIncrementResponse
 */
declare class GetIncrementResponse extends BaseModel {
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
    value: any;
    incrementType: any;
    status: any;
    createdAt: any;
    cycles: any;
    deletedAt: any;
    description: any;
    subscription: any;
    subscriptionItem: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetIncrementResponse.d.ts.map