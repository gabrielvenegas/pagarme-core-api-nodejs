export = RecipientsController;
declare class RecipientsController {
    /**
     * Gets a transfer
     *
     * @param {string} recipientId Recipient id
     * @param {string} transferId Transfer id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getTransfer(recipientId: string, transferId: string, callback?: any): any;
    /**
     * Updates a recipient
     *
     * @param {string} recipientId Recipient id
     * @param {UpdateRecipientRequest} request Recipient data
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateRecipient(recipientId: string, request: UpdateRecipientRequest, idempotencyKey: string, callback?: any): any;
    /**
     * Creates an anticipation
     *
     * @param {string} recipientId Recipient id
     * @param {CreateAnticipationRequest} request Anticipation data
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createAnticipation(recipientId: string, request: CreateAnticipationRequest, idempotencyKey: string, callback?: any): any;
    /**
     * Gets the anticipation limits for a recipient
     *
     * @param {string} recipientId Recipient id
     * @param {string} timeframe Timeframe
     * @param {dateTime} paymentDate Anticipation payment date
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAnticipationLimits(recipientId: string, timeframe: string, paymentDate: dateTime, callback?: any): any;
    /**
     * Retrieves paginated recipients information
     *
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getRecipients(page: int, size: int, callback?: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} recipientId TODO: type description here
     * @param {string} withdrawalId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getWithdrawById(recipientId: string, withdrawalId: string, callback?: any): any;
    /**
     * Updates the default bank account from a recipient
     *
     * @param {string} recipientId Recipient id
     * @param {UpdateRecipientBankAccountRequest} request Bank account data
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateRecipientDefaultBankAccount(recipientId: string, request: UpdateRecipientBankAccountRequest, idempotencyKey: string, callback?: any): any;
    /**
     * Updates recipient metadata
     *
     * @param {string} recipientId Recipient id
     * @param {UpdateMetadataRequest} request Metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateRecipientMetadata(recipientId: string, request: UpdateMetadataRequest, idempotencyKey: string, callback?: any): any;
    /**
     * Gets a paginated list of transfers for the recipient
     *
     * @param {string} recipientId Recipient id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} status (optional) Filter for transfer status
     * @param {dateTime} createdSince (optional) Filter for start range of transfer creation date
     * @param {dateTime} createdUntil (optional) Filter for end range of transfer creation date
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getTransfers(recipientId: string, page: int, size: int, status: string, createdSince: dateTime, createdUntil: dateTime, callback?: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} recipientId TODO: type description here
     * @param {CreateWithdrawRequest} request TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createWithdraw(recipientId: string, request: CreateWithdrawRequest, callback?: any): any;
    /**
     * Updates recipient metadata
     *
     * @param {string} recipientId Recipient id
     * @param {UpdateAutomaticAnticipationSettingsRequest} request Metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateAutomaticAnticipationSettings(recipientId: string, request: UpdateAutomaticAnticipationSettingsRequest, idempotencyKey: string, callback?: any): any;
    /**
     * Gets an anticipation
     *
     * @param {string} recipientId Recipient id
     * @param {string} anticipationId Anticipation id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAnticipation(recipientId: string, anticipationId: string, callback?: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} recipientId Recipient Identificator
     * @param {UpdateTransferSettingsRequest} request TODO: type description here
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateRecipientTransferSettings(recipientId: string, request: UpdateTransferSettingsRequest, idempotencyKey: string, callback?: any): any;
    /**
     * Retrieves a paginated list of anticipations from a recipient
     *
     * @param {string} recipientId Recipient id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} status (optional) Filter for anticipation status
     * @param {string} timeframe (optional) Filter for anticipation timeframe
     * @param {dateTime} paymentDateSince (optional) Filter for start range for anticipation
     * payment date
     * @param {dateTime} paymentDateUntil (optional) Filter for end range for anticipation payment
     * date
     * @param {dateTime} createdSince (optional) Filter for start range for anticipation creation
     * date
     * @param {dateTime} createdUntil (optional) Filter for end range for anticipation creation
     * date
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAnticipations(recipientId: string, page: int, size: int, status: string, timeframe: string, paymentDateSince: dateTime, paymentDateUntil: dateTime, createdSince: dateTime, createdUntil: dateTime, callback?: any): any;
    /**
     * Retrieves recipient information
     *
     * @param {string} recipientId Recipiend id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getRecipient(recipientId?: string, callback?: any): any;
    /**
     * Gets a paginated list of transfers for the recipient
     *
     * @param {string} recipientId TODO: type description here
     * @param {int} page (optional) TODO: type description here
     * @param {int} size (optional) TODO: type description here
     * @param {string} status (optional) TODO: type description here
     * @param {dateTime} createdSince (optional) TODO: type description here
     * @param {dateTime} createdUntil (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getWithdrawals(recipientId: string, page: int, size: int, status: string, createdSince: dateTime, createdUntil: dateTime, callback?: any): any;
    /**
     * Get balance information for a recipient
     *
     * @param {string} recipientId Recipient id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getBalance(recipientId?: string, callback?: any): any;
    /**
     * Creates a transfer for a recipient
     *
     * @param {string} recipientId Recipient Id
     * @param {CreateTransferRequest} request Transfer data
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createTransfer(recipientId: string, request: CreateTransferRequest, idempotencyKey: string, callback?: any): any;
    /**
     * Creates a new recipient
     *
     * @param {CreateRecipientRequest} request Recipient data
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createRecipient(request?: CreateRecipientRequest, idempotencyKey?: string, callback?: any): any;
    /**
     * Retrieves recipient information
     *
     * @param {string} code Recipient code
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getRecipientByCode(code?: string, callback?: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDefaultRecipient(callback?: string): any;
}
//# sourceMappingURL=RecipientsController.d.ts.map