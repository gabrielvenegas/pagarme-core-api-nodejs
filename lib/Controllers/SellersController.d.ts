export = SellersController;
declare class SellersController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param {CreateSellerRequest} request Seller Model
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSeller(request: CreateSellerRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} sellerId Seller Id
     * @param {UpdateMetadataRequest} request Request for updating the charge metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSellerMetadata(sellerId: string, request: UpdateMetadataRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} id TODO: type description here
     * @param {UpdateSellerRequest} request Update Seller model
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSeller(id: string, request: UpdateSellerRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} sellerId Seller Id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteSeller(sellerId: string, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} id Seller Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSellerById(id: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} name (optional) TODO: type description here
     * @param {string} document (optional) TODO: type description here
     * @param {string} code (optional) TODO: type description here
     * @param {string} status (optional) TODO: type description here
     * @param {string} type (optional) TODO: type description here
     * @param {dateTime} createdSince (optional) TODO: type description here
     * @param {dateTime} createdUntil (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSellers(page: int, size: int, name: string, document: string, code: string, status: string, type: string, createdSince: dateTime, createdUntil: dateTime, callback: any): any;
}
//# sourceMappingURL=SellersController.d.ts.map