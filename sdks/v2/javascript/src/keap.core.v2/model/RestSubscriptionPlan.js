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
import CurrencyValue from './CurrencyValue';

/**
 * The RestSubscriptionPlan model module.
 * @module keap.core.v2/model/RestSubscriptionPlan
 */
class RestSubscriptionPlan {
    /**
     * Constructs a new <code>RestSubscriptionPlan</code>.
     * @alias module:keap.core.v2/model/RestSubscriptionPlan
     */
    constructor() { 
        
        RestSubscriptionPlan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestSubscriptionPlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/RestSubscriptionPlan} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/RestSubscriptionPlan} The populated <code>RestSubscriptionPlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestSubscriptionPlan();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('cycle')) {
                obj['cycle'] = ApiClient.convertToType(data['cycle'], 'String');
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('number_of_cycles')) {
                obj['number_of_cycles'] = ApiClient.convertToType(data['number_of_cycles'], 'Number');
            }
            if (data.hasOwnProperty('plan_price')) {
                obj['plan_price'] = CurrencyValue.constructFromObject(data['plan_price']);
            }
            if (data.hasOwnProperty('subscription_plan_index')) {
                obj['subscription_plan_index'] = ApiClient.convertToType(data['subscription_plan_index'], 'Number');
            }
            if (data.hasOwnProperty('subscription_plan_name')) {
                obj['subscription_plan_name'] = ApiClient.convertToType(data['subscription_plan_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestSubscriptionPlan</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestSubscriptionPlan</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cycle'] && !(typeof data['cycle'] === 'string' || data['cycle'] instanceof String)) {
            throw new Error("Expected the field `cycle` to be a primitive type in the JSON string but got " + data['cycle']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `plan_price`
        if (data['plan_price']) { // data not null
          CurrencyValue.validateJSON(data['plan_price']);
        }
        // ensure the json data is a string
        if (data['subscription_plan_name'] && !(typeof data['subscription_plan_name'] === 'string' || data['subscription_plan_name'] instanceof String)) {
            throw new Error("Expected the field `subscription_plan_name` to be a primitive type in the JSON string but got " + data['subscription_plan_name']);
        }

        return true;
    }


}



/**
 * @member {Boolean} active
 */
RestSubscriptionPlan.prototype['active'] = undefined;

/**
 * The interval at which the customer is charged for the subscription.
 * @member {module:keap.core.v2/model/RestSubscriptionPlan.CycleEnum} cycle
 */
RestSubscriptionPlan.prototype['cycle'] = undefined;

/**
 * Interval at which a customer receives a product or service as part of a subscription plan.
 * @member {Number} frequency
 */
RestSubscriptionPlan.prototype['frequency'] = undefined;

/**
 * @member {String} id
 */
RestSubscriptionPlan.prototype['id'] = undefined;

/**
 * @member {Number} number_of_cycles
 */
RestSubscriptionPlan.prototype['number_of_cycles'] = undefined;

/**
 * @member {module:keap.core.v2/model/CurrencyValue} plan_price
 */
RestSubscriptionPlan.prototype['plan_price'] = undefined;

/**
 * Subscription plan identifier.
 * @member {Number} subscription_plan_index
 */
RestSubscriptionPlan.prototype['subscription_plan_index'] = undefined;

/**
 * @member {String} subscription_plan_name
 */
RestSubscriptionPlan.prototype['subscription_plan_name'] = undefined;





/**
 * Allowed values for the <code>cycle</code> property.
 * @enum {String}
 * @readonly
 */
RestSubscriptionPlan['CycleEnum'] = {

    /**
     * value: "DAILY"
     * @const
     */
    "DAILY": "DAILY",

    /**
     * value: "WEEKLY"
     * @const
     */
    "WEEKLY": "WEEKLY",

    /**
     * value: "MONTHLY"
     * @const
     */
    "MONTHLY": "MONTHLY",

    /**
     * value: "YEARLY"
     * @const
     */
    "YEARLY": "YEARLY",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default RestSubscriptionPlan;
