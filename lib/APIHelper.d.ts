export = APIHelper;
declare class APIHelper {
    /**
     * Replaces template parameters in the given url
     * @param   {String} queryBuilder    The query string builder to replace the template parameters
     * @param   {Array}  parameters      The parameters to replace in the queryBuilder
     * @returns {String}                 The query string with replaced template parameters
     */
    static appendUrlWithTemplateParameters(queryBuilder: string, parameters: any[]): string;
    /**
     * Appends the given set of parameters to the given query string
     * @param   {String} queryBuilder    The query url string to append the parameters
     * @param   {Array}  parameters      The parameters to append
     * @returns {String}                 The query string appended with query parameters
     */
    static appendUrlWithQueryParameters(queryBuilder: string, parameters: any[]): string;
    /**
     * Validates and processes the given Url
     * @param  {String}  url  The Url to process
     * @return {String}       Processed url
     */
    static cleanUrl(url: string): string;
    /**
     * JSON Serialization of a given object.
     * @param   {Object} data The object to serialize into JSON
     * @return  {Object}      The serialized Json string representation of the given object
     */
    static jsonSerialize(data: any): any;
    /**
     * Formats the template parameters in the string
     * @param   {string}    str     The string containing the template
     * @return  {string}            The string with template parameters filled in.
     */
    static formatString(str: string, ...args: any[]): string;
    /**
     * Cleans the object by removing null properties.
     * @param   {object} input      Object or dictionary.
     * @return  {object}            Returns the cleaned version of the object.
     */
    static cleanObject(input: object): object;
    /**
     * Shallow merges the properties of two objects
     * @param {object} first   The object to merge in to
     * @param {object} second  The object to be added to first
     *
     * @return {object}        The merged (modified) first object
     */
    static merge(first: object, second: object): object;
    /**
     * Checks if the elements of the given array are all primitives
     * @param {array}  value   The array to be checked
     *
     * @return {bool}          The result of primitive checking
     */
    static isPrimitiveArray(value: any[]): bool;
    /**
     * Converts an object to formdata serialization.
     * @param {Object} obj           The object to serialize
     * @param {array} keys           The keys of the object
     * @return {array<key,value>}    Result of serialization
     */
    static formDataEncodeObject(obj: any, keys: any[]): array<key, any>;
    /**
     * Converts an object to x-www-form-urlencoded serialization.
     * @param  {Object} obj The object to be serialized
     * @return {String}     The result of serialization
     */
    static urlEncodeObject(obj: any): string;
    /**
     * Returns Datetime string value for field
     * @param  value  {object}  Datetime object
     * @param  type   {string}  The Datetime format of the date object (value) passed in
     * @returns       {string}  Stringified Datetime object
     */
    static stringifyDateTime(value: object, type: string): string;
}
//# sourceMappingURL=APIHelper.d.ts.map