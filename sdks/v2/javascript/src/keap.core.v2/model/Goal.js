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
import HistoricalCounts from './HistoricalCounts';

/**
 * The Goal model module.
 * @module keap.core.v2/model/Goal
 */
class Goal {
    /**
     * Constructs a new <code>Goal</code>.
     * @alias module:keap.core.v2/model/Goal
     */
    constructor() { 
        
        Goal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Goal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/Goal} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/Goal} The populated <code>Goal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Goal();

            if (data.hasOwnProperty('historical_contact_counts')) {
                obj['historical_contact_counts'] = HistoricalCounts.constructFromObject(data['historical_contact_counts']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('next_sequence_ids')) {
                obj['next_sequence_ids'] = ApiClient.convertToType(data['next_sequence_ids'], ['String']);
            }
            if (data.hasOwnProperty('previous_sequence_ids')) {
                obj['previous_sequence_ids'] = ApiClient.convertToType(data['previous_sequence_ids'], ['String']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Goal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Goal</code>.
     */
    static validateJSON(data) {
        // validate the optional field `historical_contact_counts`
        if (data['historical_contact_counts']) { // data not null
          HistoricalCounts.validateJSON(data['historical_contact_counts']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['next_sequence_ids'])) {
            throw new Error("Expected the field `next_sequence_ids` to be an array in the JSON data but got " + data['next_sequence_ids']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['previous_sequence_ids'])) {
            throw new Error("Expected the field `previous_sequence_ids` to be an array in the JSON data but got " + data['previous_sequence_ids']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {module:keap.core.v2/model/HistoricalCounts} historical_contact_counts
 */
Goal.prototype['historical_contact_counts'] = undefined;

/**
 * @member {String} id
 */
Goal.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Goal.prototype['name'] = undefined;

/**
 * @member {Array.<String>} next_sequence_ids
 */
Goal.prototype['next_sequence_ids'] = undefined;

/**
 * @member {Array.<String>} previous_sequence_ids
 */
Goal.prototype['previous_sequence_ids'] = undefined;

/**
 * @member {module:keap.core.v2/model/Goal.TypeEnum} type
 */
Goal.prototype['type'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Goal['TypeEnum'] = {

    /**
     * value: "WebForm"
     * @const
     */
    "WebForm": "WebForm",

    /**
     * value: "LandingPage"
     * @const
     */
    "LandingPage": "LandingPage",

    /**
     * value: "Survey"
     * @const
     */
    "Survey": "Survey",

    /**
     * value: "LinkClick"
     * @const
     */
    "LinkClick": "LinkClick",

    /**
     * value: "EmailOpened"
     * @const
     */
    "EmailOpened": "EmailOpened",

    /**
     * value: "Score"
     * @const
     */
    "Score": "Score",

    /**
     * value: "Purchase"
     * @const
     */
    "Purchase": "Purchase",

    /**
     * value: "FailedPurchase"
     * @const
     */
    "FailedPurchase": "FailedPurchase",

    /**
     * value: "Quote"
     * @const
     */
    "Quote": "Quote",

    /**
     * value: "WebsiteTrigger"
     * @const
     */
    "WebsiteTrigger": "WebsiteTrigger",

    /**
     * value: "InternalForm"
     * @const
     */
    "InternalForm": "InternalForm",

    /**
     * value: "SmartForm"
     * @const
     */
    "SmartForm": "SmartForm",

    /**
     * value: "AppointmentEvent"
     * @const
     */
    "AppointmentEvent": "AppointmentEvent",

    /**
     * value: "Task"
     * @const
     */
    "Task": "Task",

    /**
     * value: "StageMove"
     * @const
     */
    "StageMove": "StageMove",

    /**
     * value: "Note"
     * @const
     */
    "Note": "Note",

    /**
     * value: "Tag"
     * @const
     */
    "Tag": "Tag",

    /**
     * value: "PipelineStageMove"
     * @const
     */
    "PipelineStageMove": "PipelineStageMove",

    /**
     * value: "UnlayerLandingPage"
     * @const
     */
    "UnlayerLandingPage": "UnlayerLandingPage",

    /**
     * value: "GroSocial"
     * @const
     */
    "GroSocial": "GroSocial",

    /**
     * value: "TwitterForm"
     * @const
     */
    "TwitterForm": "TwitterForm",

    /**
     * value: "API"
     * @const
     */
    "API": "API",

    /**
     * value: "WordPress"
     * @const
     */
    "WordPress": "WordPress",

    /**
     * value: "NewLandingPage"
     * @const
     */
    "NewLandingPage": "NewLandingPage",

    /**
     * value: "IntegrationTrigger"
     * @const
     */
    "IntegrationTrigger": "IntegrationTrigger",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default Goal;
