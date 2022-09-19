export = InvoicesController;
declare class InvoicesController {
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId Subscription Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getPartialInvoice(subscriptionId: string, callback: any): any;
    /**
     * Cancels an invoice
     *
     * @param {string} invoiceId Invoice id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static cancelInvoice(invoiceId: string, idempotencyKey: string, callback: any): any;
    /**
     * Create an Invoice
     *
     * @param {string} subscriptionId Subscription Id
     * @param {string} cycleId Cycle Id
     * @param {CreateInvoiceRequest} request (optional) TODO: type description here
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createInvoice(subscriptionId: string, cycleId: string, request: CreateInvoiceRequest, idempotencyKey: string, callback: any): any;
    /**
     * Updates the metadata from an invoice
     *
     * @param {string} invoiceId The invoice id
     * @param {UpdateMetadataRequest} request Request for updating the invoice metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateInvoiceMetadata(invoiceId: string, request: UpdateMetadataRequest, idempotencyKey: string, callback: any): any;
    /**
     * Gets all invoices
     *
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} code (optional) Filter for Invoice's code
     * @param {string} customerId (optional) Filter for Invoice's customer id
     * @param {string} subscriptionId (optional) Filter for Invoice's subscription id
     * @param {dateTime} createdSince (optional) Filter for Invoice's creation date start range
     * @param {dateTime} createdUntil (optional) Filter for Invoices creation date end range
     * @param {string} status (optional) Filter for Invoice's status
     * @param {dateTime} dueSince (optional) Filter for Invoice's due date start range
     * @param {dateTime} dueUntil (optional) Filter for Invoice's due date end range
     * @param {string} customerDocument (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getInvoices(page: int, size: int, code: string, customerId: string, subscriptionId: string, createdSince: dateTime, createdUntil: dateTime, status: string, dueSince: dateTime, dueUntil: dateTime, customerDocument: string, callback: any): any;
    /**
     * Gets an invoice
     *
     * @param {string} invoiceId Invoice Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getInvoice(invoiceId: string, callback: any): any;
    /**
     * Updates the status from an invoice
     *
     * @param {string} invoiceId Invoice Id
     * @param {UpdateInvoiceStatusRequest} request Request for updating an invoice's status
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateInvoiceStatus(invoiceId: string, request: UpdateInvoiceStatusRequest, idempotencyKey: string, callback: any): any;
}
//# sourceMappingURL=InvoicesController.d.ts.map