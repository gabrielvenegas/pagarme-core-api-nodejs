export = CreateAutomaticAnticipationSettingsRequest;
/**
 * Creates an instance of CreateAutomaticAnticipationSettingsRequest
 */
declare class CreateAutomaticAnticipationSettingsRequest extends BaseModel {
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
    enabled: any;
    type: any;
    volumePercentage: any;
    delay: any;
    days: any;
}
import BaseModel = require("./BaseModel");
//# sourceMappingURL=CreateAutomaticAnticipationSettingsRequest.d.ts.map