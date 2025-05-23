/**
 * Keap REST API
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.809589
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PipelineCustomField from './PipelineCustomField';

/**
 * The PipelineCustomFields model module.
 * @module keap.core.v2/model/PipelineCustomFields
 */
class PipelineCustomFields {
    /**
     * Constructs a new <code>PipelineCustomFields</code>.
     * Represents a list of custom fields in the system.
     * @alias module:keap.core.v2/model/PipelineCustomFields
     * @param customFields {Array.<module:keap.core.v2/model/PipelineCustomField>} The list of custom fields.
     */
    constructor(customFields) { 
        
        PipelineCustomFields.initialize(this, customFields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, customFields) { 
        obj['custom_fields'] = customFields;
    }

    /**
     * Constructs a <code>PipelineCustomFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/PipelineCustomFields} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/PipelineCustomFields} The populated <code>PipelineCustomFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineCustomFields();

            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [PipelineCustomField]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineCustomFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineCustomFields</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PipelineCustomFields.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['custom_fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['custom_fields'])) {
                throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
            }
            // validate the optional field `custom_fields` (array)
            for (const item of data['custom_fields']) {
                PipelineCustomField.validateJSON(item);
            };
        }

        return true;
    }


}

PipelineCustomFields.RequiredProperties = ["custom_fields"];

/**
 * The list of custom fields.
 * @member {Array.<module:keap.core.v2/model/PipelineCustomField>} custom_fields
 */
PipelineCustomFields.prototype['custom_fields'] = undefined;






export default PipelineCustomFields;
