export = PlansController;
declare class PlansController {
    /**
     * Gets a plan
     *
     * @param {string} planId Plan id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getPlan(planId: string, callback: any): any;
    /**
     * Updates the metadata from a plan
     *
     * @param {string} planId The plan id
     * @param {UpdateMetadataRequest} request Request for updating the plan metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updatePlanMetadata(planId: string, request: UpdateMetadataRequest, idempotencyKey: string, callback: any): any;
    /**
     * Updates a plan item
     *
     * @param {string} planId Plan id
     * @param {string} planItemId Plan item id
     * @param {UpdatePlanItemRequest} body Request for updating the plan item
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updatePlanItem(planId: string, planItemId: string, body: UpdatePlanItemRequest, idempotencyKey: string, callback: any): any;
    /**
     * Adds a new item to a plan
     *
     * @param {string} planId Plan id
     * @param {CreatePlanItemRequest} request Request for creating a plan item
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createPlanItem(planId: string, request: CreatePlanItemRequest, idempotencyKey: string, callback: any): any;
    /**
     * Gets a plan item
     *
     * @param {string} planId Plan id
     * @param {string} planItemId Plan item id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getPlanItem(planId: string, planItemId: string, callback: any): any;
    /**
     * Creates a new plan
     *
     * @param {CreatePlanRequest} body Request for creating a plan
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createPlan(body: CreatePlanRequest, idempotencyKey: string, callback: any): any;
    /**
     * Removes an item from a plan
     *
     * @param {string} planId Plan id
     * @param {string} planItemId Plan item id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deletePlanItem(planId: string, planItemId: string, idempotencyKey: string, callback: any): any;
    /**
     * Gets all plans
     *
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} name (optional) Filter for Plan's name
     * @param {string} status (optional) Filter for Plan's status
     * @param {string} billingType (optional) Filter for plan's billing type
     * @param {dateTime} createdSince (optional) Filter for plan's creation date start range
     * @param {dateTime} createdUntil (optional) Filter for plan's creation date end range
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getPlans(page: int, size: int, name: string, status: string, billingType: string, createdSince: dateTime, createdUntil: dateTime, callback: any): any;
    /**
     * Updates a plan
     *
     * @param {string} planId Plan id
     * @param {UpdatePlanRequest} request Request for updating a plan
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updatePlan(planId: string, request: UpdatePlanRequest, idempotencyKey: string, callback: any): any;
    /**
     * Deletes a plan
     *
     * @param {string} planId Plan id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deletePlan(planId: string, idempotencyKey: string, callback: any): any;
}
//# sourceMappingURL=PlansController.d.ts.map