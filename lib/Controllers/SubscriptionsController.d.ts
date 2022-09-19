export = SubscriptionsController;
declare class SubscriptionsController {
    /**
     * Updates the credit card from a subscription
     *
     * @param {string} subscriptionId Subscription id
     * @param {UpdateSubscriptionCardRequest} request Request for updating a card
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionCard(subscriptionId: string, request: UpdateSubscriptionCardRequest, idempotencyKey: string, callback: any): any;
    /**
     * Deletes a usage
     *
     * @param {string} subscriptionId The subscription id
     * @param {string} itemId The subscription item id
     * @param {string} usageId The usage id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteUsage(subscriptionId: string, itemId: string, usageId: string, idempotencyKey: string, callback: any): any;
    /**
     * Creates a discount
     *
     * @param {string} subscriptionId Subscription id
     * @param {CreateDiscountRequest} request Request for creating a discount
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createDiscount(subscriptionId: string, request: CreateDiscountRequest, idempotencyKey: string, callback: any): any;
    /**
     * Create Usage
     *
     * @param {string} subscriptionId Subscription id
     * @param {string} itemId Item id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createAnUsage(subscriptionId: string, itemId: string, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId Subscription Id
     * @param {UpdateCurrentCycleStatusRequest} request Request for updating the end date of the
     * subscription current status
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateCurrentCycleStatus(subscriptionId: string, request: UpdateCurrentCycleStatusRequest, idempotencyKey: string, callback: any): any;
    /**
     * Updates the payment method from a subscription
     *
     * @param {string} subscriptionId Subscription id
     * @param {UpdateSubscriptionPaymentMethodRequest} request Request for updating the
     * paymentmethod from a subscription
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionPaymentMethod(subscriptionId: string, request: UpdateSubscriptionPaymentMethodRequest, idempotencyKey: string, callback: any): any;
    /**
     * Deletes a discount
     *
     * @param {string} subscriptionId Subscription id
     * @param {string} discountId Discount Id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteDiscount(subscriptionId: string, discountId: string, idempotencyKey: string, callback: any): any;
    /**
     * Get Subscription Items
     *
     * @param {string} subscriptionId The subscription id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} name (optional) The item name
     * @param {string} code (optional) Identification code in the client system
     * @param {string} status (optional) The item statis
     * @param {string} description (optional) The item description
     * @param {string} createdSince (optional) Filter for item's creation date start range
     * @param {string} createdUntil (optional) Filter for item's creation date end range
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSubscriptionItems(subscriptionId: string, page: int, size: int, name: string, code: string, status: string, description: string, createdSince: string, createdUntil: string, callback: any): any;
    /**
     * Get Subscription Item
     *
     * @param {string} subscriptionId Subscription Id
     * @param {string} itemId Item id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSubscriptionItem(subscriptionId: string, itemId: string, callback: any): any;
    /**
     * Gets all subscriptions
     *
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} code (optional) Filter for subscription's code
     * @param {string} billingType (optional) Filter for subscription's billing type
     * @param {string} customerId (optional) Filter for subscription's customer id
     * @param {string} planId (optional) Filter for subscription's plan id
     * @param {string} cardId (optional) Filter for subscription's card id
     * @param {string} status (optional) Filter for subscription's status
     * @param {dateTime} nextBillingSince (optional) Filter for subscription's next billing date
     * start range
     * @param {dateTime} nextBillingUntil (optional) Filter for subscription's next billing date
     * end range
     * @param {dateTime} createdSince (optional) Filter for subscription's creation date start
     * range
     * @param {dateTime} createdUntil (optional) Filter for subscriptions creation date end range
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSubscriptions(page: int, size: int, code: string, billingType: string, customerId: string, planId: string, cardId: string, status: string, nextBillingSince: dateTime, nextBillingUntil: dateTime, createdSince: dateTime, createdUntil: dateTime, callback: any): any;
    /**
     * Cancels a subscription
     *
     * @param {string} subscriptionId Subscription id
     * @param {CreateCancelSubscriptionRequest} request (optional) Request for cancelling a
     * subscription
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static cancelSubscription(subscriptionId: string, request: CreateCancelSubscriptionRequest, idempotencyKey: string, callback: any): any;
    /**
     * Creates a increment
     *
     * @param {string} subscriptionId Subscription id
     * @param {CreateIncrementRequest} request Request for creating a increment
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createIncrement(subscriptionId: string, request: CreateIncrementRequest, idempotencyKey: string, callback: any): any;
    /**
     * Creates a usage
     *
     * @param {string} subscriptionId Subscription Id
     * @param {string} itemId Item id
     * @param {CreateUsageRequest} body Request for creating a usage
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createUsage(subscriptionId: string, itemId: string, body: CreateUsageRequest, idempotencyKey: string, callback: any): any;
    /**
     * Creates a new subscription
     *
     * @param {CreateSubscriptionRequest} body Request for creating a subscription
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSubscription(body: CreateSubscriptionRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId The subscription id
     * @param {string} discountId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDiscountById(subscriptionId: string, discountId: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId TODO: type description here
     * @param {UpdateSubscriptionAffiliationIdRequest} request Request for updating a subscription
     * affiliation id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionAffiliationId(subscriptionId: string, request: UpdateSubscriptionAffiliationIdRequest, idempotencyKey: string, callback: any): any;
    /**
     * Updates the metadata from a subscription
     *
     * @param {string} subscriptionId The subscription id
     * @param {UpdateMetadataRequest} request Request for updating the subscrption metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionMetadata(subscriptionId: string, request: UpdateMetadataRequest, idempotencyKey: string, callback: any): any;
    /**
     * Deletes a increment
     *
     * @param {string} subscriptionId Subscription id
     * @param {string} incrementId Increment id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteIncrement(subscriptionId: string, incrementId: string, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId Subscription Id
     * @param {string} page Page number
     * @param {string} size Page size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSubscriptionCycles(subscriptionId: string, page: string, size: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId The subscription Id
     * @param {string} incrementId The increment Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getIncrementById(subscriptionId: string, incrementId: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId The subscription id
     * @param {int} page Page number
     * @param {int} size Page size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDiscounts(subscriptionId: string, page: int, size: int, callback: any): any;
    /**
     * Updates the billing date from a subscription
     *
     * @param {string} subscriptionId The subscription id
     * @param {UpdateSubscriptionBillingDateRequest} request Request for updating the subscription
     * billing date
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionBillingDate(subscriptionId: string, request: UpdateSubscriptionBillingDateRequest, idempotencyKey: string, callback: any): any;
    /**
     * Deletes a subscription item
     *
     * @param {string} subscriptionId Subscription id
     * @param {string} subscriptionItemId Subscription item id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteSubscriptionItem(subscriptionId: string, subscriptionItemId: string, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId The subscription id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getIncrements(subscriptionId: string, page: int, size: int, callback: any): any;
    /**
     * Updates the boleto due days from a subscription
     *
     * @param {string} subscriptionId Subscription Id
     * @param {UpdateSubscriptionDueDaysRequest} request TODO: type description here
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionDueDays(subscriptionId: string, request: UpdateSubscriptionDueDaysRequest, idempotencyKey: string, callback: any): any;
    /**
     * Updates the start at date from a subscription
     *
     * @param {string} subscriptionId The subscription id
     * @param {UpdateSubscriptionStartAtRequest} request Request for updating the subscription
     * start date
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionStartAt(subscriptionId: string, request: UpdateSubscriptionStartAtRequest, idempotencyKey: string, callback: any): any;
    /**
     * Updates a subscription item
     *
     * @param {string} subscriptionId Subscription Id
     * @param {string} itemId Item id
     * @param {UpdateSubscriptionItemRequest} body Request for updating a subscription item
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionItem(subscriptionId: string, itemId: string, body: UpdateSubscriptionItemRequest, idempotencyKey: string, callback: any): any;
    /**
     * Creates a new Subscription item
     *
     * @param {string} subscriptionId Subscription id
     * @param {CreateSubscriptionItemRequest} request Request for creating a subscription item
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createSubscriptionItem(subscriptionId: string, request: CreateSubscriptionItemRequest, idempotencyKey: string, callback: any): any;
    /**
     * Gets a subscription
     *
     * @param {string} subscriptionId Subscription id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSubscription(subscriptionId: string, callback: any): any;
    /**
     * Lists all usages from a subscription item
     *
     * @param {string} subscriptionId The subscription id
     * @param {string} itemId The subscription item id
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} code (optional) Identification code in the client system
     * @param {string} group (optional) Identification group in the client system
     * @param {dateTime} usedSince (optional) TODO: type description here
     * @param {dateTime} usedUntil (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getUsages(subscriptionId: string, itemId: string, page: int, size: int, code: string, group: string, usedSince: dateTime, usedUntil: dateTime, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId TODO: type description here
     * @param {UpdateCurrentCycleEndDateRequest} request Request for updating the end date of the
     * current signature cycle
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateLatestPeriodEndAt(subscriptionId: string, request: UpdateCurrentCycleEndDateRequest, idempotencyKey: string, callback: any): any;
    /**
     * Atualização do valor mínimo da assinatura
     *
     * @param {string} subscriptionId Subscription Id
     * @param {UpdateSubscriptionMinimumPriceRequest} request Request da requisição com o valor
     * mínimo que será configurado
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSubscriptionMiniumPrice(subscriptionId: string, request: UpdateSubscriptionMinimumPriceRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId The subscription id
     * @param {string} cycleId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getSubscriptionCycleById(subscriptionId: string, cycleId: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId TODO: type description here
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static renewSubscription(subscriptionId: string, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} subscriptionId The subscription Id
     * @param {string} periodId The period Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getUsageReport(subscriptionId: string, periodId: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} id Subscription's id
     * @param {UpdateSubscriptionSplitRequest} request TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateSplitSubscription(id: string, request: UpdateSubscriptionSplitRequest, callback: any): any;
}
//# sourceMappingURL=SubscriptionsController.d.ts.map