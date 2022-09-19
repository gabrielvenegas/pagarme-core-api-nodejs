export = ObjectMapper;
/**
 * ObjectMapper is utility class that helps maps a POJO to a model or exception object.
 * Embedded models and dates are also instantiated to their correct types.
 */
declare class ObjectMapper {
    /**
     * Returns Datetime parsed value for field
     * @param  value  {string}  The value to be parsed
     * @param  type   {string}  The Datetime format to be parsed into
     * @returns       {object}  Parsed Datetime object
     */
    static parseDateTime(value: string, type: string): object;
    /**
     * Helper function to get the name of discriminator field
     *
     * @param  fieldMap  {array}  The mapping information of the model's fields
     *
     * @returns          {string}  The name of the discriminator field.
     *                             Returns null if discriminator field is not present
     */
    static getDiscriminatorFieldName(fieldMap: any[]): string;
    /**
     * Helper function to get the value of discriminator
     * This helper function checks values inside nested objects and arrays of objects as well.
     *
     * @param  json  {object}  Input object (API response)
     * @param  discrimName  {string}  The name of the discriminator field
     *
     * @returns      {string}  The value of the discriminator field present in the input object
     *                             Returns null if no value is present in the input
     */
    static getDiscriminatorFieldValue(json: object, discrimName: string): string;
    /**
     * Helper function to get the model name corresponding to the discriminator value
     *
     * @param  fieldMap  {object}  The discriminator map stored in the model class
     * @param  discrimValue  {string}  The value of the discriminator which maps
     *                                 to a model class
     *
     * @returns      {string}  The name of the model class corresponding to the discriminator
     *                         value passed in.
     */
    static getDiscriminatorClass(fieldMap: object, discrimValue: string): string;
    /**
     * Helper function to map input object with model fields
     * @param  json  {object}  Input object to be mapped onto model fields
     * @param  modelName  {string}  The name of model to instantiate
     * @returns           {object}  Object containing mapped fields of model
     */
    mapObject(json: object, modelName: string): object;
    /**
     * Maps the instance's fields with the values in input object
     * The function helps in deserializing a model instance
     * @param  json  {object}  Input object to be mapped onto model fields
     * @param  instance  {object}  The instance of the model class
     * @returns          {object}  Mapped instance of model class
     */
    mapFields(json: object, instance: object): object;
}
//# sourceMappingURL=ObjectMapper.d.ts.map