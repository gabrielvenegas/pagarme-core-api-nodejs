export = TransfersController;
declare class TransfersController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} transferId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getTransferById(transferId: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {CreateTransfer} request TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createTransfer(request: CreateTransfer, callback: any): any;
    /**
     * Gets all transfers
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getTransfers(callback: any): any;
}
//# sourceMappingURL=TransfersController.d.ts.map