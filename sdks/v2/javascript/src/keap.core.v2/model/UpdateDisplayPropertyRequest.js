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
import DisplayPropertySource from './DisplayPropertySource';
import PipelineCustomFieldDisplayOptions from './PipelineCustomFieldDisplayOptions';

/**
 * The UpdateDisplayPropertyRequest model module.
 * @module keap.core.v2/model/UpdateDisplayPropertyRequest
 */
class UpdateDisplayPropertyRequest {
    /**
     * Constructs a new <code>UpdateDisplayPropertyRequest</code>.
     * @alias module:keap.core.v2/model/UpdateDisplayPropertyRequest
     * @param source {module:keap.core.v2/model/DisplayPropertySource} Indicates whether this display property is a system or custom field.
     */
    constructor(source) { 
        
        UpdateDisplayPropertyRequest.initialize(this, source);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source) { 
        obj['source'] = source;
    }

    /**
     * Constructs a <code>UpdateDisplayPropertyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/UpdateDisplayPropertyRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/UpdateDisplayPropertyRequest} The populated <code>UpdateDisplayPropertyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDisplayPropertyRequest();

            if (data.hasOwnProperty('sort_order')) {
                obj['sort_order'] = ApiClient.convertToType(data['sort_order'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], DisplayPropertySource);
            }
            if (data.hasOwnProperty('system_field_record')) {
                obj['system_field_record'] = ApiClient.convertToType(data['system_field_record'], 'String');
            }
            if (data.hasOwnProperty('system_field_id')) {
                obj['system_field_id'] = ApiClient.convertToType(data['system_field_id'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('helper_text')) {
                obj['helper_text'] = ApiClient.convertToType(data['helper_text'], 'String');
            }
            if (data.hasOwnProperty('default_value')) {
                obj['default_value'] = ApiClient.convertToType(data['default_value'], Object);
            }
            if (data.hasOwnProperty('display_options')) {
                obj['display_options'] = ApiClient.convertToType(data['display_options'], PipelineCustomFieldDisplayOptions);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateDisplayPropertyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateDisplayPropertyRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateDisplayPropertyRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['system_field_record'] && !(typeof data['system_field_record'] === 'string' || data['system_field_record'] instanceof String)) {
            throw new Error("Expected the field `system_field_record` to be a primitive type in the JSON string but got " + data['system_field_record']);
        }
        // ensure the json data is a string
        if (data['system_field_id'] && !(typeof data['system_field_id'] === 'string' || data['system_field_id'] instanceof String)) {
            throw new Error("Expected the field `system_field_id` to be a primitive type in the JSON string but got " + data['system_field_id']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['helper_text'] && !(typeof data['helper_text'] === 'string' || data['helper_text'] instanceof String)) {
            throw new Error("Expected the field `helper_text` to be a primitive type in the JSON string but got " + data['helper_text']);
        }
        // validate the optional field `display_options`
        if (data['display_options']) { // data not null
          PipelineCustomFieldDisplayOptions.validateJSON(data['display_options']);
        }

        return true;
    }


}

UpdateDisplayPropertyRequest.RequiredProperties = ["source"];

/**
 * Determines the order for where this display property shows up on the group.
 * @member {Number} sort_order
 */
UpdateDisplayPropertyRequest.prototype['sort_order'] = undefined;

/**
 * Identifies the custom field that is tied to this display property.
 * @member {String} id
 */
UpdateDisplayPropertyRequest.prototype['id'] = undefined;

/**
 * Indicates whether this display property is a system or custom field.
 * @member {module:keap.core.v2/model/DisplayPropertySource} source
 */
UpdateDisplayPropertyRequest.prototype['source'] = undefined;

/**
 * Represents the domain (e.g., pipeline, contact) that this display property belongs to.
 * @member {String} system_field_record
 */
UpdateDisplayPropertyRequest.prototype['system_field_record'] = undefined;

/**
 * Represents the identifier of the system field that is in that displayProperty. The source of this field will depend on the domain (e. g., \"dealName\" in pipelines)
 * @member {String} system_field_id
 */
UpdateDisplayPropertyRequest.prototype['system_field_id'] = undefined;

/**
 * The label to display on this property to help users identify it
 * @member {String} label
 */
UpdateDisplayPropertyRequest.prototype['label'] = undefined;

/**
 * Documentation that explains the purpose of this property
 * @member {String} description
 */
UpdateDisplayPropertyRequest.prototype['description'] = undefined;

/**
 * More detailed explanation of the property to be shown if a user requests more information about it
 * @member {String} helper_text
 */
UpdateDisplayPropertyRequest.prototype['helper_text'] = undefined;

/**
 * The value of this property if a value is not explicitly provided
 * @member {Object} default_value
 */
UpdateDisplayPropertyRequest.prototype['default_value'] = undefined;

/**
 * Allowed values for this property
 * @member {module:keap.core.v2/model/PipelineCustomFieldDisplayOptions} display_options
 */
UpdateDisplayPropertyRequest.prototype['display_options'] = undefined;






export default UpdateDisplayPropertyRequest;
