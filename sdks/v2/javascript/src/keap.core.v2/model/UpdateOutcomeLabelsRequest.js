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
import PipelineOutcomeLabel from './PipelineOutcomeLabel';

/**
 * The UpdateOutcomeLabelsRequest model module.
 * @module keap.core.v2/model/UpdateOutcomeLabelsRequest
 */
class UpdateOutcomeLabelsRequest {
    /**
     * Constructs a new <code>UpdateOutcomeLabelsRequest</code>.
     * Represents a request to update outcome labels for a pipeline.
     * @alias module:keap.core.v2/model/UpdateOutcomeLabelsRequest
     * @param outcomeLabels {Array.<module:keap.core.v2/model/PipelineOutcomeLabel>} List of outcome labels to be updated.
     */
    constructor(outcomeLabels) { 
        
        UpdateOutcomeLabelsRequest.initialize(this, outcomeLabels);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, outcomeLabels) { 
        obj['outcome_labels'] = outcomeLabels;
    }

    /**
     * Constructs a <code>UpdateOutcomeLabelsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/UpdateOutcomeLabelsRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/UpdateOutcomeLabelsRequest} The populated <code>UpdateOutcomeLabelsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateOutcomeLabelsRequest();

            if (data.hasOwnProperty('outcome_labels')) {
                obj['outcome_labels'] = ApiClient.convertToType(data['outcome_labels'], [PipelineOutcomeLabel]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateOutcomeLabelsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateOutcomeLabelsRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateOutcomeLabelsRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['outcome_labels']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['outcome_labels'])) {
                throw new Error("Expected the field `outcome_labels` to be an array in the JSON data but got " + data['outcome_labels']);
            }
            // validate the optional field `outcome_labels` (array)
            for (const item of data['outcome_labels']) {
                PipelineOutcomeLabel.validateJSON(item);
            };
        }

        return true;
    }


}

UpdateOutcomeLabelsRequest.RequiredProperties = ["outcome_labels"];

/**
 * List of outcome labels to be updated.
 * @member {Array.<module:keap.core.v2/model/PipelineOutcomeLabel>} outcome_labels
 */
UpdateOutcomeLabelsRequest.prototype['outcome_labels'] = undefined;






export default UpdateOutcomeLabelsRequest;
