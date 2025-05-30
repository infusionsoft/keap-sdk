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
import PipelineCustomFieldSizeValidationType from './PipelineCustomFieldSizeValidationType';

/**
 * The PipelineCustomFieldSizeValidator model module.
 * @module keap.core.v2/model/PipelineCustomFieldSizeValidator
 */
class PipelineCustomFieldSizeValidator {
    /**
     * Constructs a new <code>PipelineCustomFieldSizeValidator</code>.
     * Class representing a size validator for custom fields.
     * @alias module:keap.core.v2/model/PipelineCustomFieldSizeValidator
     * @param sizeType {module:keap.core.v2/model/PipelineCustomFieldSizeValidationType} The type of size validation for the custom field. This field is required.
     * @param size {Number} The size value for the custom field.
     */
    constructor(sizeType, size) { 
        
        PipelineCustomFieldSizeValidator.initialize(this, sizeType, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sizeType, size) { 
        obj['size_type'] = sizeType;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>PipelineCustomFieldSizeValidator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/PipelineCustomFieldSizeValidator} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/PipelineCustomFieldSizeValidator} The populated <code>PipelineCustomFieldSizeValidator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PipelineCustomFieldSizeValidator();

            if (data.hasOwnProperty('size_type')) {
                obj['size_type'] = ApiClient.convertToType(data['size_type'], PipelineCustomFieldSizeValidationType);
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PipelineCustomFieldSizeValidator</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PipelineCustomFieldSizeValidator</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PipelineCustomFieldSizeValidator.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

PipelineCustomFieldSizeValidator.RequiredProperties = ["size_type", "size"];

/**
 * The type of size validation for the custom field. This field is required.
 * @member {module:keap.core.v2/model/PipelineCustomFieldSizeValidationType} size_type
 */
PipelineCustomFieldSizeValidator.prototype['size_type'] = undefined;

/**
 * The size value for the custom field.
 * @member {Number} size
 */
PipelineCustomFieldSizeValidator.prototype['size'] = undefined;






export default PipelineCustomFieldSizeValidator;
