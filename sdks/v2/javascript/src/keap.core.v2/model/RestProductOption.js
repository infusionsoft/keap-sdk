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
import RestProductOptionValue from './RestProductOptionValue';

/**
 * The RestProductOption model module.
 * @module keap.core.v2/model/RestProductOption
 */
class RestProductOption {
    /**
     * Constructs a new <code>RestProductOption</code>.
     * @alias module:keap.core.v2/model/RestProductOption
     */
    constructor() { 
        
        RestProductOption.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestProductOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/RestProductOption} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/RestProductOption} The populated <code>RestProductOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestProductOption();

            if (data.hasOwnProperty('allow_spaces')) {
                obj['allow_spaces'] = ApiClient.convertToType(data['allow_spaces'], 'Boolean');
            }
            if (data.hasOwnProperty('can_contain_character')) {
                obj['can_contain_character'] = ApiClient.convertToType(data['can_contain_character'], 'Boolean');
            }
            if (data.hasOwnProperty('can_contain_number')) {
                obj['can_contain_number'] = ApiClient.convertToType(data['can_contain_number'], 'Boolean');
            }
            if (data.hasOwnProperty('can_end_with_character')) {
                obj['can_end_with_character'] = ApiClient.convertToType(data['can_end_with_character'], 'Boolean');
            }
            if (data.hasOwnProperty('can_end_with_number')) {
                obj['can_end_with_number'] = ApiClient.convertToType(data['can_end_with_number'], 'Boolean');
            }
            if (data.hasOwnProperty('can_start_with_character')) {
                obj['can_start_with_character'] = ApiClient.convertToType(data['can_start_with_character'], 'Boolean');
            }
            if (data.hasOwnProperty('can_start_with_number')) {
                obj['can_start_with_number'] = ApiClient.convertToType(data['can_start_with_number'], 'Boolean');
            }
            if (data.hasOwnProperty('display_index')) {
                obj['display_index'] = ApiClient.convertToType(data['display_index'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('max_chars')) {
                obj['max_chars'] = ApiClient.convertToType(data['max_chars'], 'Number');
            }
            if (data.hasOwnProperty('min_chars')) {
                obj['min_chars'] = ApiClient.convertToType(data['min_chars'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('text_message')) {
                obj['text_message'] = ApiClient.convertToType(data['text_message'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [RestProductOptionValue]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestProductOption</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestProductOption</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['text_message'] && !(typeof data['text_message'] === 'string' || data['text_message'] instanceof String)) {
            throw new Error("Expected the field `text_message` to be a primitive type in the JSON string but got " + data['text_message']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        if (data['values']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['values'])) {
                throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
            }
            // validate the optional field `values` (array)
            for (const item of data['values']) {
                RestProductOptionValue.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Boolean} allow_spaces
 */
RestProductOption.prototype['allow_spaces'] = undefined;

/**
 * @member {Boolean} can_contain_character
 */
RestProductOption.prototype['can_contain_character'] = undefined;

/**
 * @member {Boolean} can_contain_number
 */
RestProductOption.prototype['can_contain_number'] = undefined;

/**
 * @member {Boolean} can_end_with_character
 */
RestProductOption.prototype['can_end_with_character'] = undefined;

/**
 * @member {Boolean} can_end_with_number
 */
RestProductOption.prototype['can_end_with_number'] = undefined;

/**
 * @member {Boolean} can_start_with_character
 */
RestProductOption.prototype['can_start_with_character'] = undefined;

/**
 * @member {Boolean} can_start_with_number
 */
RestProductOption.prototype['can_start_with_number'] = undefined;

/**
 * @member {Number} display_index
 */
RestProductOption.prototype['display_index'] = undefined;

/**
 * @member {String} id
 */
RestProductOption.prototype['id'] = undefined;

/**
 * @member {String} label
 */
RestProductOption.prototype['label'] = undefined;

/**
 * @member {Number} max_chars
 */
RestProductOption.prototype['max_chars'] = undefined;

/**
 * @member {Number} min_chars
 */
RestProductOption.prototype['min_chars'] = undefined;

/**
 * @member {String} name
 */
RestProductOption.prototype['name'] = undefined;

/**
 * @member {Boolean} required
 */
RestProductOption.prototype['required'] = undefined;

/**
 * @member {String} text_message
 */
RestProductOption.prototype['text_message'] = undefined;

/**
 * @member {module:keap.core.v2/model/RestProductOption.TypeEnum} type
 */
RestProductOption.prototype['type'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/RestProductOptionValue>} values
 */
RestProductOption.prototype['values'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RestProductOption['TypeEnum'] = {

    /**
     * value: "FIXED"
     * @const
     */
    "FIXED": "FIXED",

    /**
     * value: "VARIABLE"
     * @const
     */
    "VARIABLE": "VARIABLE",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default RestProductOption;
