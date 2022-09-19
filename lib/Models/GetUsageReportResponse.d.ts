export = GetUsageReportResponse;
/**
 * Creates an instance of GetUsageReportResponse
 */
declare class GetUsageReportResponse extends BaseModel {
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
    url: any;
    usageReportUrl: any;
    groupedReportUrl: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=GetUsageReportResponse.d.ts.map