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
import CustomField from './CustomField';

/**
 * The CreateOpportunityRequest model module.
 * @module keap.core.v2/model/CreateOpportunityRequest
 */
class CreateOpportunityRequest {
    /**
     * Constructs a new <code>CreateOpportunityRequest</code>.
     * @alias module:keap.core.v2/model/CreateOpportunityRequest
     * @param opportunityTitle {String} 
     */
    constructor(opportunityTitle) { 
        
        CreateOpportunityRequest.initialize(this, opportunityTitle);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, opportunityTitle) { 
        obj['opportunity_title'] = opportunityTitle;
    }

    /**
     * Constructs a <code>CreateOpportunityRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/CreateOpportunityRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/CreateOpportunityRequest} The populated <code>CreateOpportunityRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateOpportunityRequest();

            if (data.hasOwnProperty('affiliate_id')) {
                obj['affiliate_id'] = ApiClient.convertToType(data['affiliate_id'], 'String');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('custom_fields')) {
                obj['custom_fields'] = ApiClient.convertToType(data['custom_fields'], [CustomField]);
            }
            if (data.hasOwnProperty('estimated_close_time')) {
                obj['estimated_close_time'] = ApiClient.convertToType(data['estimated_close_time'], 'String');
            }
            if (data.hasOwnProperty('include_in_forecast')) {
                obj['include_in_forecast'] = ApiClient.convertToType(data['include_in_forecast'], 'Boolean');
            }
            if (data.hasOwnProperty('next_action_notes')) {
                obj['next_action_notes'] = ApiClient.convertToType(data['next_action_notes'], 'String');
            }
            if (data.hasOwnProperty('next_action_time')) {
                obj['next_action_time'] = ApiClient.convertToType(data['next_action_time'], 'String');
            }
            if (data.hasOwnProperty('opportunity_notes')) {
                obj['opportunity_notes'] = ApiClient.convertToType(data['opportunity_notes'], 'String');
            }
            if (data.hasOwnProperty('opportunity_title')) {
                obj['opportunity_title'] = ApiClient.convertToType(data['opportunity_title'], 'String');
            }
            if (data.hasOwnProperty('projected_revenue_high')) {
                obj['projected_revenue_high'] = ApiClient.convertToType(data['projected_revenue_high'], 'Number');
            }
            if (data.hasOwnProperty('projected_revenue_low')) {
                obj['projected_revenue_low'] = ApiClient.convertToType(data['projected_revenue_low'], 'Number');
            }
            if (data.hasOwnProperty('stage_id')) {
                obj['stage_id'] = ApiClient.convertToType(data['stage_id'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateOpportunityRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateOpportunityRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateOpportunityRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['affiliate_id'] && !(typeof data['affiliate_id'] === 'string' || data['affiliate_id'] instanceof String)) {
            throw new Error("Expected the field `affiliate_id` to be a primitive type in the JSON string but got " + data['affiliate_id']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        if (data['custom_fields']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['custom_fields'])) {
                throw new Error("Expected the field `custom_fields` to be an array in the JSON data but got " + data['custom_fields']);
            }
            // validate the optional field `custom_fields` (array)
            for (const item of data['custom_fields']) {
                CustomField.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['estimated_close_time'] && !(typeof data['estimated_close_time'] === 'string' || data['estimated_close_time'] instanceof String)) {
            throw new Error("Expected the field `estimated_close_time` to be a primitive type in the JSON string but got " + data['estimated_close_time']);
        }
        // ensure the json data is a string
        if (data['next_action_notes'] && !(typeof data['next_action_notes'] === 'string' || data['next_action_notes'] instanceof String)) {
            throw new Error("Expected the field `next_action_notes` to be a primitive type in the JSON string but got " + data['next_action_notes']);
        }
        // ensure the json data is a string
        if (data['next_action_time'] && !(typeof data['next_action_time'] === 'string' || data['next_action_time'] instanceof String)) {
            throw new Error("Expected the field `next_action_time` to be a primitive type in the JSON string but got " + data['next_action_time']);
        }
        // ensure the json data is a string
        if (data['opportunity_notes'] && !(typeof data['opportunity_notes'] === 'string' || data['opportunity_notes'] instanceof String)) {
            throw new Error("Expected the field `opportunity_notes` to be a primitive type in the JSON string but got " + data['opportunity_notes']);
        }
        // ensure the json data is a string
        if (data['opportunity_title'] && !(typeof data['opportunity_title'] === 'string' || data['opportunity_title'] instanceof String)) {
            throw new Error("Expected the field `opportunity_title` to be a primitive type in the JSON string but got " + data['opportunity_title']);
        }
        // ensure the json data is a string
        if (data['stage_id'] && !(typeof data['stage_id'] === 'string' || data['stage_id'] instanceof String)) {
            throw new Error("Expected the field `stage_id` to be a primitive type in the JSON string but got " + data['stage_id']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }

        return true;
    }


}

CreateOpportunityRequest.RequiredProperties = ["opportunity_title"];

/**
 * @member {String} affiliate_id
 */
CreateOpportunityRequest.prototype['affiliate_id'] = undefined;

/**
 * @member {String} contact_id
 */
CreateOpportunityRequest.prototype['contact_id'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/CustomField>} custom_fields
 */
CreateOpportunityRequest.prototype['custom_fields'] = undefined;

/**
 * @member {String} estimated_close_time
 */
CreateOpportunityRequest.prototype['estimated_close_time'] = undefined;

/**
 * @member {Boolean} include_in_forecast
 */
CreateOpportunityRequest.prototype['include_in_forecast'] = undefined;

/**
 * @member {String} next_action_notes
 */
CreateOpportunityRequest.prototype['next_action_notes'] = undefined;

/**
 * @member {String} next_action_time
 */
CreateOpportunityRequest.prototype['next_action_time'] = undefined;

/**
 * @member {String} opportunity_notes
 */
CreateOpportunityRequest.prototype['opportunity_notes'] = undefined;

/**
 * @member {String} opportunity_title
 */
CreateOpportunityRequest.prototype['opportunity_title'] = undefined;

/**
 * @member {Number} projected_revenue_high
 */
CreateOpportunityRequest.prototype['projected_revenue_high'] = undefined;

/**
 * @member {Number} projected_revenue_low
 */
CreateOpportunityRequest.prototype['projected_revenue_low'] = undefined;

/**
 * @member {String} stage_id
 */
CreateOpportunityRequest.prototype['stage_id'] = undefined;

/**
 * @member {String} user_id
 */
CreateOpportunityRequest.prototype['user_id'] = undefined;






export default CreateOpportunityRequest;
