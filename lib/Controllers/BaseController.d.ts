export = BaseController;
declare class BaseController {
    /**
     * Get ObjectMapper instance
     * @return {ObjectMapper} Shared instance
     */
    static getObjectMapper(): ObjectMapper;
    /**
     * Global error handling
     * @param   {HttpContext}   _context   HttpContext containing request and response objects
     * @callback    Callback function which returns error, response, context
     */
    static validateResponse(_context: HttpContext): {
        error: {
            errorMessage: string;
            errorCode: string;
            errorResponse: any;
        };
        response: any;
        context: HttpContext;
    };
}
//# sourceMappingURL=BaseController.d.ts.map