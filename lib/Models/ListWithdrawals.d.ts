export = ListWithdrawals;
/**
 * Creates an instance of ListWithdrawals
 */
declare class ListWithdrawals extends BaseModel {
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
    data: any;
    paging: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=ListWithdrawals.d.ts.map