export = ListRecipientResponse;
/**
 * Creates an instance of ListRecipientResponse
 */
declare class ListRecipientResponse extends BaseModel {
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
//# sourceMappingURL=ListRecipientResponse.d.ts.map