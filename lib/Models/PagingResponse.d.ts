export = PagingResponse;
/**
 * Creates an instance of PagingResponse
 */
declare class PagingResponse extends BaseModel {
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
    total: any;
    previous: any;
    next: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=PagingResponse.d.ts.map