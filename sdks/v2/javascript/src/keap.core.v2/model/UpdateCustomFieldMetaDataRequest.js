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
import CustomFieldOption from './CustomFieldOption';

/**
 * The UpdateCustomFieldMetaDataRequest model module.
 * @module keap.core.v2/model/UpdateCustomFieldMetaDataRequest
 */
class UpdateCustomFieldMetaDataRequest {
    /**
     * Constructs a new <code>UpdateCustomFieldMetaDataRequest</code>.
     * @alias module:keap.core.v2/model/UpdateCustomFieldMetaDataRequest
     * @param groupId {String} 
     */
    constructor(groupId) { 
        
        UpdateCustomFieldMetaDataRequest.initialize(this, groupId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupId) { 
        obj['group_id'] = groupId;
    }

    /**
     * Constructs a <code>UpdateCustomFieldMetaDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/UpdateCustomFieldMetaDataRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/UpdateCustomFieldMetaDataRequest} The populated <code>UpdateCustomFieldMetaDataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateCustomFieldMetaDataRequest();

            if (data.hasOwnProperty('group_id')) {
                obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [CustomFieldOption]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateCustomFieldMetaDataRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateCustomFieldMetaDataRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateCustomFieldMetaDataRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['group_id'] && !(typeof data['group_id'] === 'string' || data['group_id'] instanceof String)) {
            throw new Error("Expected the field `group_id` to be a primitive type in the JSON string but got " + data['group_id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                CustomFieldOption.validateJSON(item);
            };
        }

        return true;
    }


}

UpdateCustomFieldMetaDataRequest.RequiredProperties = ["group_id"];

/**
 * @member {String} group_id
 */
UpdateCustomFieldMetaDataRequest.prototype['group_id'] = undefined;

/**
 * @member {String} label
 */
UpdateCustomFieldMetaDataRequest.prototype['label'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/CustomFieldOption>} options
 */
UpdateCustomFieldMetaDataRequest.prototype['options'] = undefined;






export default UpdateCustomFieldMetaDataRequest;
