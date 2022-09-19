export = BaseModel;
/**
 * Creates an instance of BaseModel
 */
declare class BaseModel {
    /**
     * Returns value for the object called
     * @param  obj  {string}  The value to be assigned
     * @param  defaultValue  {string} The default value for the field
     * @returns  The correct value for the field
     */
    static getValue(obj: string, defaultValue: string): string;
    /**
     * Function containing information about the fields of this model
     * @returns   {array}   Empty array
     */
    static mappingInfo(): any[];
    /**
     * Helper function to check if value exists in the array of objects
     * @param  val  {string}  The value to be checked in array
     * @returns  If value doesn't exist in the array, returns null. Otherwise, returns the value
     */
    mappingInfoContains(val: string): any;
    /**
     * Helper function to get the value (type) of datetime fields
     * @param  name  {string}  The (actual) name of the field
     * @returns  If field is not a date/datetime field, returns undefined.
     *           Otherwise, returns the value (type)
     */
    getDateTimeValueForField(name: string): null;
    /**
     * Helper Function to get Serialized Model
     * @returns  {object}  Dictionary of all model properties alongwith
     *                     additional properties (if any)
     */
    toJSON(): object;
}
//# sourceMappingURL=BaseModel.d.ts.map