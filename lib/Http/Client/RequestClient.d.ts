export = executeRequest;
/**
 * Execute a given HttpRequest to get string response back
 * @param    {HttpRequest | HttpBodyRequest}  req    The query string builder to replace the
 *                                                   template parameters
 * @param   {function}    callback   Callback function to execute when request completes or fails
 * @param   {Array} parameters    The parameters to replace in the queryBuilder
 * @returns {void}                Does not return anything
 */
declare function executeRequest(req: HttpRequest | HttpBodyRequest, callback: Function): void;
//# sourceMappingURL=RequestClient.d.ts.map