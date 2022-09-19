export = ChargesController;
declare class ChargesController {
    /**
     * Updates the metadata from a charge
     *
     * @param {string} chargeId The charge id
     * @param {UpdateMetadataRequest} request Request for updating the charge metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateChargeMetadata(chargeId: string, request: UpdateMetadataRequest, idempotencyKey: string, callback: any): any;
    /**
     * Captures a charge
     *
     * @param {string} chargeId Charge id
     * @param {CreateCaptureChargeRequest} request (optional) Request for capturing a charge
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static captureCharge(chargeId: string, request: CreateCaptureChargeRequest, idempotencyKey: string, callback: any): any;
    /**
     * Updates a charge's payment method
     *
     * @param {string} chargeId Charge id
     * @param {UpdateChargePaymentMethodRequest} request Request for updating the payment method
     * from a charge
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateChargePaymentMethod(chargeId: string, request: UpdateChargePaymentMethodRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} chargeId Charge Id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getChargeTransactions(chargeId: string, page: int, size: int, callback: any): any;
    /**
     * Updates the due date from a charge
     *
     * @param {string} chargeId Charge Id
     * @param {UpdateChargeDueDateRequest} request Request for updating the due date
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateChargeDueDate(chargeId: string, request: UpdateChargeDueDateRequest, idempotencyKey: string, callback: any): any;
    /**
     * Lists all charges
     *
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} code (optional) Filter for charge's code
     * @param {string} status (optional) Filter for charge's status
     * @param {string} paymentMethod (optional) Filter for charge's payment method
     * @param {string} customerId (optional) Filter for charge's customer id
     * @param {string} orderId (optional) Filter for charge's order id
     * @param {dateTime} createdSince (optional) Filter for the beginning of the range for charge's
     * creation
     * @param {dateTime} createdUntil (optional) Filter for the end of the range for charge's
     * creation
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getCharges(page: int, size: int, code: string, status: string, paymentMethod: string, customerId: string, orderId: string, createdSince: dateTime, createdUntil: dateTime, callback: any): any;
    /**
     * Updates the card from a charge
     *
     * @param {string} chargeId Charge id
     * @param {UpdateChargeCardRequest} request Request for updating a charge's card
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateChargeCard(chargeId: string, request: UpdateChargeCardRequest, idempotencyKey: string, callback: any): any;
    /**
     * Get a charge from its id
     *
     * @param {string} chargeId Charge id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getCharge(chargeId: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} status TODO: type description here
     * @param {dateTime} createdSince (optional) TODO: type description here
     * @param {dateTime} createdUntil (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getChargesSummary(status: string, createdSince: dateTime, createdUntil: dateTime, callback: any): any;
    /**
     * Retries a charge
     *
     * @param {string} chargeId Charge id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static retryCharge(chargeId: string, idempotencyKey: string, callback: any): any;
    /**
     * Cancel a charge
     *
     * @param {string} chargeId Charge id
     * @param {CreateCancelChargeRequest} request (optional) Request for cancelling a charge
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static cancelCharge(chargeId: string, request: CreateCancelChargeRequest, idempotencyKey: string, callback: any): any;
    /**
     * Creates a new charge
     *
     * @param {CreateChargeRequest} request Request for creating a charge
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createCharge(request: CreateChargeRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} chargeId TODO: type description here
     * @param {CreateConfirmPaymentRequest} request (optional) Request for confirm payment
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static confirmPayment(chargeId: string, request: CreateConfirmPaymentRequest, idempotencyKey: string, callback: any): any;
}
//# sourceMappingURL=ChargesController.d.ts.map