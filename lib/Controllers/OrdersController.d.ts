export = OrdersController;
declare class OrdersController {
    /**
     * Gets all orders
     *
     * @param {int} page (optional) Page number
     * @param {int} size (optional) Page size
     * @param {string} code (optional) Filter for order's code
     * @param {string} status (optional) Filter for order's status
     * @param {dateTime} createdSince (optional) Filter for order's creation date start range
     * @param {dateTime} createdUntil (optional) Filter for order's creation date end range
     * @param {string} customerId (optional) Filter for order's customer id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getOrders(page: int, size: int, code: string, status: string, createdSince: dateTime, createdUntil: dateTime, customerId: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} orderId Order Id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteAllOrderItems(orderId: string, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} orderId Order Id
     * @param {string} itemId Item Id
     * @param {UpdateOrderItemRequest} request Item Model
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateOrderItem(orderId: string, itemId: string, request: UpdateOrderItemRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} orderId Order Id
     * @param {string} itemId Item Id
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteOrderItem(orderId: string, itemId: string, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} id Order Id
     * @param {UpdateOrderStatusRequest} request Update Order Model
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static closeOrder(id: string, request: UpdateOrderStatusRequest, idempotencyKey: string, callback: any): any;
    /**
     * Creates a new Order
     *
     * @param {CreateOrderRequest} body Request for creating an order
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createOrder(body: CreateOrderRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} orderId Order Id
     * @param {CreateOrderItemRequest} request Order Item Model
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createOrderItem(orderId: string, request: CreateOrderItemRequest, idempotencyKey: string, callback: any): any;
    /**
     * @todo Add general description for this endpoint
     *
     * @param {string} orderId Order Id
     * @param {string} itemId Item Id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getOrderItem(orderId: string, itemId: string, callback: any): any;
    /**
     * Updates the metadata from an order
     *
     * @param {string} orderId The order id
     * @param {UpdateMetadataRequest} request Request for updating the order metadata
     * @param {string} idempotencyKey (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateOrderMetadata(orderId: string, request: UpdateMetadataRequest, idempotencyKey: string, callback: any): any;
    /**
     * Gets an order
     *
     * @param {string} orderId Order id
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getOrder(orderId: string, callback: any): any;
}
//# sourceMappingURL=OrdersController.d.ts.map