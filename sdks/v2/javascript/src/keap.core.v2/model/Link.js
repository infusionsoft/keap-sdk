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
 * The Link model module.
 * @module keap.core.v2/model/Link
 */
class Link {
    /**
     * Constructs a new <code>Link</code>.
     * @alias module:keap.core.v2/model/Link
     */
    constructor() { 
        
        Link.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/Link} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/Link} The populated <code>Link</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Link();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('link_type_id')) {
                obj['link_type_id'] = ApiClient.convertToType(data['link_type_id'], 'String');
            }
            if (data.hasOwnProperty('link_type_name')) {
                obj['link_type_name'] = ApiClient.convertToType(data['link_type_name'], 'String');
            }
            if (data.hasOwnProperty('linked_contact_id')) {
                obj['linked_contact_id'] = ApiClient.convertToType(data['linked_contact_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Link</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Link</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['link_type_id'] && !(typeof data['link_type_id'] === 'string' || data['link_type_id'] instanceof String)) {
            throw new Error("Expected the field `link_type_id` to be a primitive type in the JSON string but got " + data['link_type_id']);
        }
        // ensure the json data is a string
        if (data['link_type_name'] && !(typeof data['link_type_name'] === 'string' || data['link_type_name'] instanceof String)) {
            throw new Error("Expected the field `link_type_name` to be a primitive type in the JSON string but got " + data['link_type_name']);
        }
        // ensure the json data is a string
        if (data['linked_contact_id'] && !(typeof data['linked_contact_id'] === 'string' || data['linked_contact_id'] instanceof String)) {
            throw new Error("Expected the field `linked_contact_id` to be a primitive type in the JSON string but got " + data['linked_contact_id']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Link.prototype['id'] = undefined;

/**
 * @member {String} link_type_id
 */
Link.prototype['link_type_id'] = undefined;

/**
 * @member {String} link_type_name
 */
Link.prototype['link_type_name'] = undefined;

/**
 * @member {String} linked_contact_id
 */
Link.prototype['linked_contact_id'] = undefined;






export default Link;
