/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.789938-hf-202503111611
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BasicContact from './BasicContact';
import PaymentPlan from './PaymentPlan';
import RestV2OrderItem from './RestV2OrderItem';
import ShippingInformation from './ShippingInformation';

/**
 * The RestV2Order model module.
 * @module keap.core.v2/model/RestV2Order
 */
class RestV2Order {
    /**
     * Constructs a new <code>RestV2Order</code>.
     * @alias module:keap.core.v2/model/RestV2Order
     */
    constructor() { 
        
        RestV2Order.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestV2Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/RestV2Order} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/RestV2Order} The populated <code>RestV2Order</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestV2Order();

            if (data.hasOwnProperty('allow_payment')) {
                obj['allow_payment'] = ApiClient.convertToType(data['allow_payment'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_paypal')) {
                obj['allow_paypal'] = ApiClient.convertToType(data['allow_paypal'], 'Boolean');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = BasicContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('creation_time')) {
                obj['creation_time'] = ApiClient.convertToType(data['creation_time'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('invoice_number')) {
                obj['invoice_number'] = ApiClient.convertToType(data['invoice_number'], 'String');
            }
            if (data.hasOwnProperty('lead_affiliate_id')) {
                obj['lead_affiliate_id'] = ApiClient.convertToType(data['lead_affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('modification_time')) {
                obj['modification_time'] = ApiClient.convertToType(data['modification_time'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('order_items')) {
                obj['order_items'] = ApiClient.convertToType(data['order_items'], [RestV2OrderItem]);
            }
            if (data.hasOwnProperty('order_time')) {
                obj['order_time'] = ApiClient.convertToType(data['order_time'], 'String');
            }
            if (data.hasOwnProperty('order_type')) {
                obj['order_type'] = ApiClient.convertToType(data['order_type'], 'String');
            }
            if (data.hasOwnProperty('payment_plan')) {
                obj['payment_plan'] = PaymentPlan.constructFromObject(data['payment_plan']);
            }
            if (data.hasOwnProperty('recurring')) {
                obj['recurring'] = ApiClient.convertToType(data['recurring'], 'Boolean');
            }
            if (data.hasOwnProperty('refund_total')) {
                obj['refund_total'] = ApiClient.convertToType(data['refund_total'], 'Number');
            }
            if (data.hasOwnProperty('sales_affiliate_id')) {
                obj['sales_affiliate_id'] = ApiClient.convertToType(data['sales_affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('shipping_information')) {
                obj['shipping_information'] = ShippingInformation.constructFromObject(data['shipping_information']);
            }
            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ApiClient.convertToType(data['terms'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('total_due')) {
                obj['total_due'] = ApiClient.convertToType(data['total_due'], 'Number');
            }
            if (data.hasOwnProperty('total_paid')) {
                obj['total_paid'] = ApiClient.convertToType(data['total_paid'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2Order</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2Order</code>.
     */
    static validateJSON(data) {
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          BasicContact.validateJSON(data['contact']);
        }
        // ensure the json data is a string
        if (data['creation_time'] && !(typeof data['creation_time'] === 'string' || data['creation_time'] instanceof String)) {
            throw new Error("Expected the field `creation_time` to be a primitive type in the JSON string but got " + data['creation_time']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['invoice_number'] && !(typeof data['invoice_number'] === 'string' || data['invoice_number'] instanceof String)) {
            throw new Error("Expected the field `invoice_number` to be a primitive type in the JSON string but got " + data['invoice_number']);
        }
        // ensure the json data is a string
        if (data['lead_affiliate_id'] && !(typeof data['lead_affiliate_id'] === 'string' || data['lead_affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `lead_affiliate_id` to be a primitive type in the JSON string but got " + data['lead_affiliate_id']);
        }
        // ensure the json data is a string
        if (data['modification_time'] && !(typeof data['modification_time'] === 'string' || data['modification_time'] instanceof String)) {
            throw new Error("Expected the field `modification_time` to be a primitive type in the JSON string but got " + data['modification_time']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        if (data['order_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['order_items'])) {
                throw new Error("Expected the field `order_items` to be an array in the JSON data but got " + data['order_items']);
            }
            // validate the optional field `order_items` (array)
            for (const item of data['order_items']) {
                RestV2OrderItem.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['order_time'] && !(typeof data['order_time'] === 'string' || data['order_time'] instanceof String)) {
            throw new Error("Expected the field `order_time` to be a primitive type in the JSON string but got " + data['order_time']);
        }
        // ensure the json data is a string
        if (data['order_type'] && !(typeof data['order_type'] === 'string' || data['order_type'] instanceof String)) {
            throw new Error("Expected the field `order_type` to be a primitive type in the JSON string but got " + data['order_type']);
        }
        // validate the optional field `payment_plan`
        if (data['payment_plan']) { // data not null
          PaymentPlan.validateJSON(data['payment_plan']);
        }
        // ensure the json data is a string
        if (data['sales_affiliate_id'] && !(typeof data['sales_affiliate_id'] === 'string' || data['sales_affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `sales_affiliate_id` to be a primitive type in the JSON string but got " + data['sales_affiliate_id']);
        }
        // validate the optional field `shipping_information`
        if (data['shipping_information']) { // data not null
          ShippingInformation.validateJSON(data['shipping_information']);
        }
        // ensure the json data is a string
        if (data['source_type'] && !(typeof data['source_type'] === 'string' || data['source_type'] instanceof String)) {
            throw new Error("Expected the field `source_type` to be a primitive type in the JSON string but got " + data['source_type']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['terms'] && !(typeof data['terms'] === 'string' || data['terms'] instanceof String)) {
            throw new Error("Expected the field `terms` to be a primitive type in the JSON string but got " + data['terms']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * @member {Boolean} allow_payment
 */
RestV2Order.prototype['allow_payment'] = undefined;

/**
 * @member {Boolean} allow_paypal
 */
RestV2Order.prototype['allow_paypal'] = undefined;

/**
 * @member {module:keap.core.v2/model/BasicContact} contact
 */
RestV2Order.prototype['contact'] = undefined;

/**
 * @member {String} creation_time
 */
RestV2Order.prototype['creation_time'] = undefined;

/**
 * @member {String} id
 */
RestV2Order.prototype['id'] = undefined;

/**
 * @member {String} invoice_number
 */
RestV2Order.prototype['invoice_number'] = undefined;

/**
 * @member {String} lead_affiliate_id
 */
RestV2Order.prototype['lead_affiliate_id'] = undefined;

/**
 * @member {String} modification_time
 */
RestV2Order.prototype['modification_time'] = undefined;

/**
 * @member {String} notes
 */
RestV2Order.prototype['notes'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/RestV2OrderItem>} order_items
 */
RestV2Order.prototype['order_items'] = undefined;

/**
 * @member {String} order_time
 */
RestV2Order.prototype['order_time'] = undefined;

/**
 * @member {String} order_type
 */
RestV2Order.prototype['order_type'] = undefined;

/**
 * @member {module:keap.core.v2/model/PaymentPlan} payment_plan
 */
RestV2Order.prototype['payment_plan'] = undefined;

/**
 * @member {Boolean} recurring
 */
RestV2Order.prototype['recurring'] = undefined;

/**
 * @member {Number} refund_total
 */
RestV2Order.prototype['refund_total'] = undefined;

/**
 * @member {String} sales_affiliate_id
 */
RestV2Order.prototype['sales_affiliate_id'] = undefined;

/**
 * @member {module:keap.core.v2/model/ShippingInformation} shipping_information
 */
RestV2Order.prototype['shipping_information'] = undefined;

/**
 * @member {module:keap.core.v2/model/RestV2Order.SourceTypeEnum} source_type
 */
RestV2Order.prototype['source_type'] = undefined;

/**
 * @member {String} status
 */
RestV2Order.prototype['status'] = undefined;

/**
 * @member {String} terms
 */
RestV2Order.prototype['terms'] = undefined;

/**
 * @member {String} title
 */
RestV2Order.prototype['title'] = undefined;

/**
 * @member {Number} total
 */
RestV2Order.prototype['total'] = undefined;

/**
 * @member {Number} total_due
 */
RestV2Order.prototype['total_due'] = undefined;

/**
 * @member {Number} total_paid
 */
RestV2Order.prototype['total_paid'] = undefined;





/**
 * Allowed values for the <code>source_type</code> property.
 * @enum {String}
 * @readonly
 */
RestV2Order['SourceTypeEnum'] = {

    /**
     * value: "INVOICE"
     * @const
     */
    "INVOICE": "INVOICE",

    /**
     * value: "API"
     * @const
     */
    "API": "API",

    /**
     * value: "CHECKOUT_FORM"
     * @const
     */
    "CHECKOUT_FORM": "CHECKOUT_FORM",

    /**
     * value: "MANUAL_PAYMENT"
     * @const
     */
    "MANUAL_PAYMENT": "MANUAL_PAYMENT",

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN",

    /**
     * value: "QBO_SYNC"
     * @const
     */
    "QBO_SYNC": "QBO_SYNC",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default RestV2Order;
