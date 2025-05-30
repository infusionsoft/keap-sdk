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
import PipelineCustomFieldArrayDisplayOptions from './PipelineCustomFieldArrayDisplayOptions';
import PipelineCustomFieldBooleanDisplayOptions from './PipelineCustomFieldBooleanDisplayOptions';
import PipelineCustomFieldDateTimeOptions from './PipelineCustomFieldDateTimeOptions';
import PipelineCustomFieldDisplayOptionsType from './PipelineCustomFieldDisplayOptionsType';
import PipelineCustomFieldDurationDisplayOptions from './PipelineCustomFieldDurationDisplayOptions';
import PipelineCustomFieldRefDisplayOptions from './PipelineCustomFieldRefDisplayOptions';

/**
 * The PipelineCustomFieldDisplayOptions model module.
 * @module keap.core.v2/model/PipelineCustomFieldDisplayOptions
 */
class PipelineCustomFieldDisplayOptions {
    /**
     * Constructs a new <code>PipelineCustomFieldDisplayOptions</code>.
     * Class representing display options for a custom field.
     * @alias module:keap.core.v2/model/PipelineCustomFieldDisplayOptions
     * @param type {module:keap.core.v2/model/PipelineCustomFieldDisplayOptionsType} The type of display options. This field is required.
     * @param hidden {Boolean} Indicates whether the custom field is hidden.
     */
    constructor(type, hidden) { 
        
        PipelineCustomFieldDisplayOptions.initialize(this, type, hidden);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, hidden) { 
        obj['type'] = type;
        obj['hidden'] = hidden;
    }

    /**
     * Constructs a <code>PipelineCustomFieldDisplayOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/PipelineCustomFieldDisplayOptions} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/PipelineCustomFieldDisplayOptions} The populated <code>PipelineCustomFieldDisplayOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineCustomFieldDisplayOptions();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], PipelineCustomFieldDisplayOptionsType);
            }
            if (data.hasOwnProperty('hidden')) {
                obj['hidden'] = ApiClient.convertToType(data['hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('array_display_options')) {
                obj['array_display_options'] = ApiClient.convertToType(data['array_display_options'], PipelineCustomFieldArrayDisplayOptions);
            }
            if (data.hasOwnProperty('reference_type_display_options')) {
                obj['reference_type_display_options'] = ApiClient.convertToType(data['reference_type_display_options'], PipelineCustomFieldRefDisplayOptions);
            }
            if (data.hasOwnProperty('date_time_display_options')) {
                obj['date_time_display_options'] = ApiClient.convertToType(data['date_time_display_options'], PipelineCustomFieldDateTimeOptions);
            }
            if (data.hasOwnProperty('boolean_display_options')) {
                obj['boolean_display_options'] = ApiClient.convertToType(data['boolean_display_options'], PipelineCustomFieldBooleanDisplayOptions);
            }
            if (data.hasOwnProperty('duration')) {
                obj['duration'] = ApiClient.convertToType(data['duration'], PipelineCustomFieldDurationDisplayOptions);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineCustomFieldDisplayOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineCustomFieldDisplayOptions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PipelineCustomFieldDisplayOptions.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `array_display_options`
        if (data['array_display_options']) { // data not null
          PipelineCustomFieldArrayDisplayOptions.validateJSON(data['array_display_options']);
        }
        // validate the optional field `reference_type_display_options`
        if (data['reference_type_display_options']) { // data not null
          PipelineCustomFieldRefDisplayOptions.validateJSON(data['reference_type_display_options']);
        }
        // validate the optional field `date_time_display_options`
        if (data['date_time_display_options']) { // data not null
          PipelineCustomFieldDateTimeOptions.validateJSON(data['date_time_display_options']);
        }
        // validate the optional field `boolean_display_options`
        if (data['boolean_display_options']) { // data not null
          PipelineCustomFieldBooleanDisplayOptions.validateJSON(data['boolean_display_options']);
        }
        // validate the optional field `duration`
        if (data['duration']) { // data not null
          PipelineCustomFieldDurationDisplayOptions.validateJSON(data['duration']);
        }

        return true;
    }


}

PipelineCustomFieldDisplayOptions.RequiredProperties = ["type", "hidden"];

/**
 * The type of display options. This field is required.
 * @member {module:keap.core.v2/model/PipelineCustomFieldDisplayOptionsType} type
 */
PipelineCustomFieldDisplayOptions.prototype['type'] = undefined;

/**
 * Indicates whether the custom field is hidden.
 * @member {Boolean} hidden
 */
PipelineCustomFieldDisplayOptions.prototype['hidden'] = undefined;

/**
 * The display options for array type custom fields. This field is optional.
 * @member {module:keap.core.v2/model/PipelineCustomFieldArrayDisplayOptions} array_display_options
 */
PipelineCustomFieldDisplayOptions.prototype['array_display_options'] = undefined;

/**
 * The display options for reference type custom fields. This field is optional.
 * @member {module:keap.core.v2/model/PipelineCustomFieldRefDisplayOptions} reference_type_display_options
 */
PipelineCustomFieldDisplayOptions.prototype['reference_type_display_options'] = undefined;

/**
 * The display options for date and time type custom fields. This field is optional.
 * @member {module:keap.core.v2/model/PipelineCustomFieldDateTimeOptions} date_time_display_options
 */
PipelineCustomFieldDisplayOptions.prototype['date_time_display_options'] = undefined;

/**
 * The display options for boolean type custom fields. This field is optional.
 * @member {module:keap.core.v2/model/PipelineCustomFieldBooleanDisplayOptions} boolean_display_options
 */
PipelineCustomFieldDisplayOptions.prototype['boolean_display_options'] = undefined;

/**
 * The display options for duration type custom fields. This field is optional.
 * @member {module:keap.core.v2/model/PipelineCustomFieldDurationDisplayOptions} duration
 */
PipelineCustomFieldDisplayOptions.prototype['duration'] = undefined;






export default PipelineCustomFieldDisplayOptions;
