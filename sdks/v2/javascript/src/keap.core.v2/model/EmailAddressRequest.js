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
 * The EmailAddressRequest model module.
 * @module keap.core.v2/model/EmailAddressRequest
 */
class EmailAddressRequest {
    /**
     * Constructs a new <code>EmailAddressRequest</code>.
     * @alias module:keap.core.v2/model/EmailAddressRequest
     */
    constructor() { 
        
        EmailAddressRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailAddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/EmailAddressRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/EmailAddressRequest} The populated <code>EmailAddressRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailAddressRequest();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('field')) {
                obj['field'] = ApiClient.convertToType(data['field'], 'String');
            }
            if (data.hasOwnProperty('opt_in_reason')) {
                obj['opt_in_reason'] = ApiClient.convertToType(data['opt_in_reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailAddressRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailAddressRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['field'] && !(typeof data['field'] === 'string' || data['field'] instanceof String)) {
            throw new Error("Expected the field `field` to be a primitive type in the JSON string but got " + data['field']);
        }
        // ensure the json data is a string
        if (data['opt_in_reason'] && !(typeof data['opt_in_reason'] === 'string' || data['opt_in_reason'] instanceof String)) {
            throw new Error("Expected the field `opt_in_reason` to be a primitive type in the JSON string but got " + data['opt_in_reason']);
        }

        return true;
    }


}



/**
 * @member {String} email
 */
EmailAddressRequest.prototype['email'] = undefined;

/**
 * @member {module:keap.core.v2/model/EmailAddressRequest.FieldEnum} field
 */
EmailAddressRequest.prototype['field'] = undefined;

/**
 * @member {String} opt_in_reason
 */
EmailAddressRequest.prototype['opt_in_reason'] = undefined;





/**
 * Allowed values for the <code>field</code> property.
 * @enum {String}
 * @readonly
 */
EmailAddressRequest['FieldEnum'] = {

    /**
     * value: "EMAIL_FIELD_UNSPECIFIED"
     * @const
     */
    "EMAIL_FIELD_UNSPECIFIED": "EMAIL_FIELD_UNSPECIFIED",

    /**
     * value: "EMAIL1"
     * @const
     */
    "EMAIL1": "EMAIL1",

    /**
     * value: "EMAIL2"
     * @const
     */
    "EMAIL2": "EMAIL2",

    /**
     * value: "EMAIL3"
     * @const
     */
    "EMAIL3": "EMAIL3",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default EmailAddressRequest;
