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
import CardInfo from './CardInfo';

/**
 * The PaymentMethod model module.
 * @module keap.core.v2/model/PaymentMethod
 */
class PaymentMethod {
    /**
     * Constructs a new <code>PaymentMethod</code>.
     * @alias module:keap.core.v2/model/PaymentMethod
     */
    constructor() { 
        
        PaymentMethod.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/PaymentMethod} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/PaymentMethod} The populated <code>PaymentMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethod();

            if (data.hasOwnProperty('card_info')) {
                obj['card_info'] = CardInfo.constructFromObject(data['card_info']);
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('created_time')) {
                obj['created_time'] = ApiClient.convertToType(data['created_time'], 'String');
            }
            if (data.hasOwnProperty('payment_gateway_id')) {
                obj['payment_gateway_id'] = ApiClient.convertToType(data['payment_gateway_id'], 'String');
            }
            if (data.hasOwnProperty('payment_method_id')) {
                obj['payment_method_id'] = ApiClient.convertToType(data['payment_method_id'], 'String');
            }
            if (data.hasOwnProperty('payment_method_type')) {
                obj['payment_method_type'] = ApiClient.convertToType(data['payment_method_type'], 'String');
            }
            if (data.hasOwnProperty('payment_processor_type')) {
                obj['payment_processor_type'] = ApiClient.convertToType(data['payment_processor_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymentMethod</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymentMethod</code>.
     */
    static validateJSON(data) {
        // validate the optional field `card_info`
        if (data['card_info']) { // data not null
          CardInfo.validateJSON(data['card_info']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['created_time'] && !(typeof data['created_time'] === 'string' || data['created_time'] instanceof String)) {
            throw new Error("Expected the field `created_time` to be a primitive type in the JSON string but got " + data['created_time']);
        }
        // ensure the json data is a string
        if (data['payment_gateway_id'] && !(typeof data['payment_gateway_id'] === 'string' || data['payment_gateway_id'] instanceof String)) {
            throw new Error("Expected the field `payment_gateway_id` to be a primitive type in the JSON string but got " + data['payment_gateway_id']);
        }
        // ensure the json data is a string
        if (data['payment_method_id'] && !(typeof data['payment_method_id'] === 'string' || data['payment_method_id'] instanceof String)) {
            throw new Error("Expected the field `payment_method_id` to be a primitive type in the JSON string but got " + data['payment_method_id']);
        }
        // ensure the json data is a string
        if (data['payment_method_type'] && !(typeof data['payment_method_type'] === 'string' || data['payment_method_type'] instanceof String)) {
            throw new Error("Expected the field `payment_method_type` to be a primitive type in the JSON string but got " + data['payment_method_type']);
        }
        // ensure the json data is a string
        if (data['payment_processor_type'] && !(typeof data['payment_processor_type'] === 'string' || data['payment_processor_type'] instanceof String)) {
            throw new Error("Expected the field `payment_processor_type` to be a primitive type in the JSON string but got " + data['payment_processor_type']);
        }

        return true;
    }


}



/**
 * @member {module:keap.core.v2/model/CardInfo} card_info
 */
PaymentMethod.prototype['card_info'] = undefined;

/**
 * @member {String} contact_id
 */
PaymentMethod.prototype['contact_id'] = undefined;

/**
 * @member {String} created_time
 */
PaymentMethod.prototype['created_time'] = undefined;

/**
 * @member {String} payment_gateway_id
 */
PaymentMethod.prototype['payment_gateway_id'] = undefined;

/**
 * @member {String} payment_method_id
 */
PaymentMethod.prototype['payment_method_id'] = undefined;

/**
 * @member {module:keap.core.v2/model/PaymentMethod.PaymentMethodTypeEnum} payment_method_type
 */
PaymentMethod.prototype['payment_method_type'] = undefined;

/**
 * @member {module:keap.core.v2/model/PaymentMethod.PaymentProcessorTypeEnum} payment_processor_type
 */
PaymentMethod.prototype['payment_processor_type'] = undefined;





/**
 * Allowed values for the <code>payment_method_type</code> property.
 * @enum {String}
 * @readonly
 */
PaymentMethod['PaymentMethodTypeEnum'] = {

    /**
     * value: "CARD"
     * @const
     */
    "CARD": "CARD",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>payment_processor_type</code> property.
 * @enum {String}
 * @readonly
 */
PaymentMethod['PaymentProcessorTypeEnum'] = {

    /**
     * value: "PAYPAL"
     * @const
     */
    "PAYPAL": "PAYPAL",

    /**
     * value: "UNSUPPORTED"
     * @const
     */
    "UNSUPPORTED": "UNSUPPORTED",

    /**
     * value: "AUTHORIZE"
     * @const
     */
    "AUTHORIZE": "AUTHORIZE",

    /**
     * value: "EWAY"
     * @const
     */
    "EWAY": "EWAY",

    /**
     * value: "WEPAY"
     * @const
     */
    "WEPAY": "WEPAY",

    /**
     * value: "STRIPE"
     * @const
     */
    "STRIPE": "STRIPE",

    /**
     * value: "KEAP_PAY"
     * @const
     */
    "KEAP_PAY": "KEAP_PAY",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default PaymentMethod;
