export = TokensController;
declare class TokensController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} publicKey Public key
     * @param {CreateTokenRequest} request Request for creating a token
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createToken(publicKey: string, request: CreateTokenRequest, idempotencyKey: string, callback: any): any;
    /**
     * Gets a token from its id
     *
     * @param {string} id Token id
     * @param {string} publicKey Public key
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getToken(id: string, publicKey: string, callback: any): any;
}
//# sourceMappingURL=TokensController.d.ts.map