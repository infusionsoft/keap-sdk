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
import Item from './Item';

/**
 * The SequencePath model module.
 * @module keap.core.v2/model/SequencePath
 */
class SequencePath {
    /**
     * Constructs a new <code>SequencePath</code>.
     * @alias module:keap.core.v2/model/SequencePath
     */
    constructor() { 
        
        SequencePath.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SequencePath</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/SequencePath} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/SequencePath} The populated <code>SequencePath</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SequencePath();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SequencePath</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SequencePath</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                Item.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
SequencePath.prototype['id'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/Item>} items
 */
SequencePath.prototype['items'] = undefined;






export default SequencePath;
