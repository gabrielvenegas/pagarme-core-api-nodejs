export = CustomersController;
declare class CustomersController {
    /**
     * Updates a card
     *
     * @param {string} customerId Customer Id
     * @param {string} cardId Card id
     * @param {UpdateCardRequest} request Request for updating a card
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateCard(customerId: string, cardId: string, request: UpdateCardRequest, idempotencyKey: string, callback: any): any;
    /**
     * Updates an address
     *
     * @param {string} customerId Customer Id
     * @param {string} addressId Address Id
     * @param {UpdateAddressRequest} request Request for updating an address
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateAddress(customerId: string, addressId: string, request: UpdateAddressRequest, idempotencyKey: string, callback: any): any;
    /**
     * Delete a customer's access token
     *
     * @param {string} customerId Customer Id
     * @param {string} tokenId Token Id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteAccessToken(customerId: string, tokenId: string, idempotencyKey: string, callback: any): any;
    /**
     * Creates a access token for a customer
     *
     * @param {string} customerId Customer Id
     * @param {CreateAccessTokenRequest} request Request for creating a access token
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createAccessToken(customerId: string, request: CreateAccessTokenRequest, idempotencyKey: string, callback: any): any;
    /**
     * Creates a new address for a customer
     *
     * @param {string} customerId Customer Id
     * @param {CreateAddressRequest} request Request for creating an address
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createAddress(customerId: string, request: CreateAddressRequest, idempotencyKey: string, callback: any): any;
    /**
     * Creates a new customer
     *
     * @param {CreateCustomerRequest} request Request for creating a customer
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createCustomer(request: CreateCustomerRequest, idempotencyKey: string, callback: any): any;
    /**
     * Delete a Customer's access tokens
     *
     * @param {string} customerId Customer Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteAccessTokens(customerId: string, callback: any): any;
    /**
     * Get a customer's address
     *
     * @param {string} customerId Customer id
     * @param {string} addressId Address Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAddress(customerId: string, addressId: string, callback: any): any;
    /**
     * Delete a Customer's address
     *
     * @param {string} customerId Customer Id
     * @param {string} addressId Address Id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteAddress(customerId: string, addressId: string, idempotencyKey: string, callback: any): any;
    /**
     * Creates a new card for a customer
     *
     * @param {string} customerId Customer id
     * @param {CreateCardRequest} request Request for creating a card
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createCard(customerId: string, request: CreateCardRequest, idempotencyKey: string, callback: any): any;
    /**
     * Get all Customers
     *
     * @param {string} name (optional) Name of the Customer
     * @param {string} document (optional) Document of the Customer
     * @param {int} page (optional) Current page the the search
     * @param {int} size (optional) Quantity pages of the search
     * @param {string} email (optional) Customer's email
     * @param {string} code (optional) Customer's code
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getCustomers(name: string, document: string, page: int, size: int, email: string, code: string, callback: any): any;
    /**
     * Updates a customer
     *
     * @param {string} customerId Customer id
     * @param {UpdateCustomerRequest} request Request for updating a customer
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateCustomer(customerId: string, request: UpdateCustomerRequest, idempotencyKey: string, callback: any): any;
    /**
     * Get all access tokens from a customer
     *
     * @param {string} customerId Customer Id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAccessTokens(customerId: string, page: int, size: int, callback: any): any;
    /**
     * Get all cards from a customer
     *
     * @param {string} customerId Customer Id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getCards(customerId: string, page: int, size: int, callback: any): any;
    /**
     * Renew a card
     *
     * @param {string} customerId Customer id
     * @param {string} cardId Card Id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static renewCard(customerId: string, cardId: string, idempotencyKey: string, callback: any): any;
    /**
     * Get a Customer's access token
     *
     * @param {string} customerId Customer Id
     * @param {string} tokenId Token Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAccessToken(customerId: string, tokenId: string, callback: any): any;
    /**
     * Updates the metadata a customer
     *
     * @param {string} customerId The customer id
     * @param {UpdateMetadataRequest} request Request for updating the customer metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateCustomerMetadata(customerId: string, request: UpdateMetadataRequest, idempotencyKey: string, callback: any): any;
    /**
     * Delete a customer's card
     *
     * @param {string} customerId Customer Id
     * @param {string} cardId Card Id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteCard(customerId: string, cardId: string, idempotencyKey: string, callback: any): any;
    /**
     * Gets all adressess from a customer
     *
     * @param {string} customerId Customer id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getAddresses(customerId: string, page: int, size: int, callback: any): any;
    /**
     * Get a customer
     *
     * @param {string} customerId Customer Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getCustomer(customerId: string, callback: any): any;
    /**
     * Get a customer's card
     *
     * @param {string} customerId Customer id
     * @param {string} cardId Card id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getCard(customerId: string, cardId: string, callback: any): any;
}
//# sourceMappingURL=CustomersController.d.ts.map