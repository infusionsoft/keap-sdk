/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AddProductInterestRequest model module.
 * @module keap.core.v2/model/AddProductInterestRequest
 */
class AddProductInterestRequest {
    /**
     * Constructs a new <code>AddProductInterestRequest</code>.
     * @alias module:keap.core.v2/model/AddProductInterestRequest
     * @param entityId {String} The `product_id` (when the `type` is set to `PRODUCT`)  or the `subscription_plan_id` (when the `type` is set to `SUBSCRIPTION_PLAN`). 
     * @param price {Number} 
     * @param type {module:keap.core.v2/model/AddProductInterestRequest.TypeEnum} 
     */
    constructor(entityId, price, type) { 
        
        AddProductInterestRequest.initialize(this, entityId, price, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, entityId, price, type) { 
        obj['entity_id'] = entityId;
        obj['price'] = price;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>AddProductInterestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/AddProductInterestRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/AddProductInterestRequest} The populated <code>AddProductInterestRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddProductInterestRequest();

            if (data.hasOwnProperty('discount_percent')) {
                obj['discount_percent'] = ApiClient.convertToType(data['discount_percent'], 'Number');
            }
            if (data.hasOwnProperty('entity_id')) {
                obj['entity_id'] = ApiClient.convertToType(data['entity_id'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AddProductInterestRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AddProductInterestRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AddProductInterestRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['entity_id'] && !(typeof data['entity_id'] === 'string' || data['entity_id'] instanceof String)) {
            throw new Error("Expected the field `entity_id` to be a primitive type in the JSON string but got " + data['entity_id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

AddProductInterestRequest.RequiredProperties = ["entity_id", "price", "type"];

/**
 * Defaults to `0`.
 * @member {Number} discount_percent
 */
AddProductInterestRequest.prototype['discount_percent'] = undefined;

/**
 * The `product_id` (when the `type` is set to `PRODUCT`)  or the `subscription_plan_id` (when the `type` is set to `SUBSCRIPTION_PLAN`). 
 * @member {String} entity_id
 */
AddProductInterestRequest.prototype['entity_id'] = undefined;

/**
 * @member {Number} price
 */
AddProductInterestRequest.prototype['price'] = undefined;

/**
 * Defaults to `1`.
 * @member {Number} quantity
 */
AddProductInterestRequest.prototype['quantity'] = undefined;

/**
 * @member {module:keap.core.v2/model/AddProductInterestRequest.TypeEnum} type
 */
AddProductInterestRequest.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
AddProductInterestRequest['TypeEnum'] = {

    /**
     * value: "PRODUCT"
     * @const
     */
    "PRODUCT": "PRODUCT",

    /**
     * value: "SUBSCRIPTION_PLAN"
     * @const
     */
    "SUBSCRIPTION_PLAN": "SUBSCRIPTION_PLAN",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default AddProductInterestRequest;
