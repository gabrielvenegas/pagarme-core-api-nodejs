export = UpdateChargeCardRequest;
/**
 * Creates an instance of UpdateChargeCardRequest
 */
declare class UpdateChargeCardRequest extends BaseModel {
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
    updateSubscription: any;
    cardId: any;
    card: any;
    recurrence: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=UpdateChargeCardRequest.d.ts.map