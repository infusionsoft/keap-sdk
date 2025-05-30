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
 * The Referral model module.
 * @module keap.core.v2/model/Referral
 */
class Referral {
    /**
     * Constructs a new <code>Referral</code>.
     * @alias module:keap.core.v2/model/Referral
     */
    constructor() { 
        
        Referral.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Referral</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/Referral} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/Referral} The populated <code>Referral</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Referral();

            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expiration_time')) {
                obj['expiration_time'] = ApiClient.convertToType(data['expiration_time'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('ip_address')) {
                obj['ip_address'] = ApiClient.convertToType(data['ip_address'], 'String');
            }
            if (data.hasOwnProperty('referral_partner_id')) {
                obj['referral_partner_id'] = ApiClient.convertToType(data['referral_partner_id'], 'String');
            }
            if (data.hasOwnProperty('referral_time')) {
                obj['referral_time'] = ApiClient.convertToType(data['referral_time'], 'String');
            }
            if (data.hasOwnProperty('referral_type')) {
                obj['referral_type'] = ApiClient.convertToType(data['referral_type'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Referral</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Referral</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['expiration_time'] && !(typeof data['expiration_time'] === 'string' || data['expiration_time'] instanceof String)) {
            throw new Error("Expected the field `expiration_time` to be a primitive type in the JSON string but got " + data['expiration_time']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['ip_address'] && !(typeof data['ip_address'] === 'string' || data['ip_address'] instanceof String)) {
            throw new Error("Expected the field `ip_address` to be a primitive type in the JSON string but got " + data['ip_address']);
        }
        // ensure the json data is a string
        if (data['referral_partner_id'] && !(typeof data['referral_partner_id'] === 'string' || data['referral_partner_id'] instanceof String)) {
            throw new Error("Expected the field `referral_partner_id` to be a primitive type in the JSON string but got " + data['referral_partner_id']);
        }
        // ensure the json data is a string
        if (data['referral_time'] && !(typeof data['referral_time'] === 'string' || data['referral_time'] instanceof String)) {
            throw new Error("Expected the field `referral_time` to be a primitive type in the JSON string but got " + data['referral_time']);
        }
        // ensure the json data is a string
        if (data['referral_type'] && !(typeof data['referral_type'] === 'string' || data['referral_type'] instanceof String)) {
            throw new Error("Expected the field `referral_type` to be a primitive type in the JSON string but got " + data['referral_type']);
        }
        // ensure the json data is a string
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }

        return true;
    }


}



/**
 * @member {String} contact_id
 */
Referral.prototype['contact_id'] = undefined;

/**
 * @member {String} description
 */
Referral.prototype['description'] = undefined;

/**
 * @member {String} expiration_time
 */
Referral.prototype['expiration_time'] = undefined;

/**
 * @member {String} id
 */
Referral.prototype['id'] = undefined;

/**
 * @member {String} ip_address
 */
Referral.prototype['ip_address'] = undefined;

/**
 * @member {String} referral_partner_id
 */
Referral.prototype['referral_partner_id'] = undefined;

/**
 * @member {String} referral_time
 */
Referral.prototype['referral_time'] = undefined;

/**
 * @member {module:keap.core.v2/model/Referral.ReferralTypeEnum} referral_type
 */
Referral.prototype['referral_type'] = undefined;

/**
 * @member {String} source
 */
Referral.prototype['source'] = undefined;





/**
 * Allowed values for the <code>referral_type</code> property.
 * @enum {String}
 * @readonly
 */
Referral['ReferralTypeEnum'] = {

    /**
     * value: "COOKIE"
     * @const
     */
    "COOKIE": "COOKIE",

    /**
     * value: "PERMANENT"
     * @const
     */
    "PERMANENT": "PERMANENT",

    /**
     * value: "MANUAL"
     * @const
     */
    "MANUAL": "MANUAL",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default Referral;
