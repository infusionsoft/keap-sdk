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

/**
 * The CreateUpdateTaskRequest model module.
 * @module keap.core.v2/model/CreateUpdateTaskRequest
 */
class CreateUpdateTaskRequest {
    /**
     * Constructs a new <code>CreateUpdateTaskRequest</code>.
     * @alias module:keap.core.v2/model/CreateUpdateTaskRequest
     */
    constructor() { 
        
        CreateUpdateTaskRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateUpdateTaskRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/CreateUpdateTaskRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/CreateUpdateTaskRequest} The populated <code>CreateUpdateTaskRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUpdateTaskRequest();

            if (data.hasOwnProperty('assigned_to_user_id')) {
                obj['assigned_to_user_id'] = ApiClient.convertToType(data['assigned_to_user_id'], 'String');
            }
            if (data.hasOwnProperty('completed')) {
                obj['completed'] = ApiClient.convertToType(data['completed'], 'Boolean');
            }
            if (data.hasOwnProperty('completion_time')) {
                obj['completion_time'] = ApiClient.convertToType(data['completion_time'], 'String');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('due_time')) {
                obj['due_time'] = ApiClient.convertToType(data['due_time'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'String');
            }
            if (data.hasOwnProperty('remind_time_mins')) {
                obj['remind_time_mins'] = ApiClient.convertToType(data['remind_time_mins'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateUpdateTaskRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateUpdateTaskRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['assigned_to_user_id'] && !(typeof data['assigned_to_user_id'] === 'string' || data['assigned_to_user_id'] instanceof String)) {
            throw new Error("Expected the field `assigned_to_user_id` to be a primitive type in the JSON string but got " + data['assigned_to_user_id']);
        }
        // ensure the json data is a string
        if (data['completion_time'] && !(typeof data['completion_time'] === 'string' || data['completion_time'] instanceof String)) {
            throw new Error("Expected the field `completion_time` to be a primitive type in the JSON string but got " + data['completion_time']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['due_time'] && !(typeof data['due_time'] === 'string' || data['due_time'] instanceof String)) {
            throw new Error("Expected the field `due_time` to be a primitive type in the JSON string but got " + data['due_time']);
        }
        // ensure the json data is a string
        if (data['priority'] && !(typeof data['priority'] === 'string' || data['priority'] instanceof String)) {
            throw new Error("Expected the field `priority` to be a primitive type in the JSON string but got " + data['priority']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} assigned_to_user_id
 */
CreateUpdateTaskRequest.prototype['assigned_to_user_id'] = undefined;

/**
 * @member {Boolean} completed
 */
CreateUpdateTaskRequest.prototype['completed'] = undefined;

/**
 * @member {String} completion_time
 */
CreateUpdateTaskRequest.prototype['completion_time'] = undefined;

/**
 * @member {String} contact_id
 */
CreateUpdateTaskRequest.prototype['contact_id'] = undefined;

/**
 * @member {String} description
 */
CreateUpdateTaskRequest.prototype['description'] = undefined;

/**
 * @member {String} due_time
 */
CreateUpdateTaskRequest.prototype['due_time'] = undefined;

/**
 * @member {module:keap.core.v2/model/CreateUpdateTaskRequest.PriorityEnum} priority
 */
CreateUpdateTaskRequest.prototype['priority'] = undefined;

/**
 * Value in minutes before start_date to show pop-up reminder.  Acceptable values are [5,10,15,30,60,120,240,480,1440,2880]
 * @member {Number} remind_time_mins
 */
CreateUpdateTaskRequest.prototype['remind_time_mins'] = undefined;

/**
 * @member {String} title
 */
CreateUpdateTaskRequest.prototype['title'] = undefined;

/**
 * @member {module:keap.core.v2/model/CreateUpdateTaskRequest.TypeEnum} type
 */
CreateUpdateTaskRequest.prototype['type'] = undefined;





/**
 * Allowed values for the <code>priority</code> property.
 * @enum {String}
 * @readonly
 */
CreateUpdateTaskRequest['PriorityEnum'] = {

    /**
     * value: "CRITICAL"
     * @const
     */
    "CRITICAL": "CRITICAL",

    /**
     * value: "ESSENTIAL"
     * @const
     */
    "ESSENTIAL": "ESSENTIAL",

    /**
     * value: "NONESSENTIAL"
     * @const
     */
    "NONESSENTIAL": "NONESSENTIAL",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateUpdateTaskRequest['TypeEnum'] = {

    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL",

    /**
     * value: "CALL"
     * @const
     */
    "CALL": "CALL",

    /**
     * value: "APPOINTMENT"
     * @const
     */
    "APPOINTMENT": "APPOINTMENT",

    /**
     * value: "FAX"
     * @const
     */
    "FAX": "FAX",

    /**
     * value: "LETTER"
     * @const
     */
    "LETTER": "LETTER",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",

    /**
     * value: "unknown_default_open_api"
     * @const
     */
    "unknown_default_open_api": "unknown_default_open_api"
};


export default CreateUpdateTaskRequest;
