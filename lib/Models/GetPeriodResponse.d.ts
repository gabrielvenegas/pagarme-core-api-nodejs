export = GetPeriodResponse;
/**
 * Creates an instance of GetPeriodResponse
 */
declare class GetPeriodResponse extends BaseModel {
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
    startAt: any;
    endAt: any;
    id: any;
    billingAt: any;
    subscription: any;
    status: any;
    duration: any;
    createdAt: any;
    updatedAt: any;
    cycle: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetPeriodResponse.d.ts.map