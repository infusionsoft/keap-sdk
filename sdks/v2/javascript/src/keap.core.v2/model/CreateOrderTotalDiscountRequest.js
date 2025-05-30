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
import DiscountCriteria from './DiscountCriteria';

/**
 * The CreateOrderTotalDiscountRequest model module.
 * @module keap.core.v2/model/CreateOrderTotalDiscountRequest
 */
class CreateOrderTotalDiscountRequest {
    /**
     * Constructs a new <code>CreateOrderTotalDiscountRequest</code>.
     * @alias module:keap.core.v2/model/CreateOrderTotalDiscountRequest
     * @param discountType {module:keap.core.v2/model/CreateOrderTotalDiscountRequest.DiscountTypeEnum} 
     * @param discountValue {Number} 
     * @param name {String} 
     */
    constructor(discountType, discountValue, name) { 
        
        CreateOrderTotalDiscountRequest.initialize(this, discountType, discountValue, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, discountType, discountValue, name) { 
        obj['discount_type'] = discountType;
        obj['discount_value'] = discountValue;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateOrderTotalDiscountRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/CreateOrderTotalDiscountRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/CreateOrderTotalDiscountRequest} The populated <code>CreateOrderTotalDiscountRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOrderTotalDiscountRequest();

            if (data.hasOwnProperty('apply_to_commissions')) {
                obj['apply_to_commissions'] = ApiClient.convertToType(data['apply_to_commissions'], 'Boolean');
            }
            if (data.hasOwnProperty('criteria')) {
                obj['criteria'] = ApiClient.convertToType(data['criteria'], [DiscountCriteria]);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('discount_strategy')) {
                obj['discount_strategy'] = ApiClient.convertToType(data['discount_strategy'], 'String');
            }
            if (data.hasOwnProperty('discount_type')) {
                obj['discount_type'] = ApiClient.convertToType(data['discount_type'], 'String');
            }
            if (data.hasOwnProperty('discount_value')) {
                obj['discount_value'] = ApiClient.convertToType(data['discount_value'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateOrderTotalDiscountRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateOrderTotalDiscountRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateOrderTotalDiscountRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['criteria']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['criteria'])) {
                throw new Error("Expected the field `criteria` to be an array in the JSON data but got " + data['criteria']);
            }
            // validate the optional field `criteria` (array)
            for (const item of data['criteria']) {
                DiscountCriteria.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['discount_strategy'] && !(typeof data['discount_strategy'] === 'string' || data['discount_strategy'] instanceof String)) {
            throw new Error("Expected the field `discount_strategy` to be a primitive type in the JSON string but got " + data['discount_strategy']);
        }
        // ensure the json data is a string
        if (data['discount_type'] && !(typeof data['discount_type'] === 'string' || data['discount_type'] instanceof String)) {
            throw new Error("Expected the field `discount_type` to be a primitive type in the JSON string but got " + data['discount_type']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

CreateOrderTotalDiscountRequest.RequiredProperties = ["discount_type", "discount_value", "name"];

/**
 * @member {Boolean} apply_to_commissions
 */
CreateOrderTotalDiscountRequest.prototype['apply_to_commissions'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/DiscountCriteria>} criteria
 */
CreateOrderTotalDiscountRequest.prototype['criteria'] = undefined;

/**
 * @member {String} description
 */
CreateOrderTotalDiscountRequest.prototype['description'] = undefined;

/**
 * @member {module:keap.core.v2/model/CreateOrderTotalDiscountRequest.DiscountStrategyEnum} discount_strategy
 */
CreateOrderTotalDiscountRequest.prototype['discount_strategy'] = undefined;

/**
 * @member {module:keap.core.v2/model/CreateOrderTotalDiscountRequest.DiscountTypeEnum} discount_type
 */
CreateOrderTotalDiscountRequest.prototype['discount_type'] = undefined;

/**
 * @member {Number} discount_value
 */
CreateOrderTotalDiscountRequest.prototype['discount_value'] = undefined;

/**
 * @member {String} name
 */
CreateOrderTotalDiscountRequest.prototype['name'] = undefined;





/**
 * Allowed values for the <code>discount_strategy</code> property.
 * @enum {String}
 * @readonly
 */
CreateOrderTotalDiscountRequest['DiscountStrategyEnum'] = {

    /**
     * value: "GROSS"
     * @const
     */
    "GROSS": "GROSS",

    /**
     * value: "NET"
     * @const
     */
    "NET": "NET",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>discount_type</code> property.
 * @enum {String}
 * @readonly
 */
CreateOrderTotalDiscountRequest['DiscountTypeEnum'] = {

    /**
     * value: "AMOUNT"
     * @const
     */
    "AMOUNT": "AMOUNT",

    /**
     * value: "PERCENT"
     * @const
     */
    "PERCENT": "PERCENT",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default CreateOrderTotalDiscountRequest;
