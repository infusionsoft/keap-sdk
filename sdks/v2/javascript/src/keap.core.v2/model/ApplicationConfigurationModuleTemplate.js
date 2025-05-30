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
 * The ApplicationConfigurationModuleTemplate model module.
 * @module keap.core.v2/model/ApplicationConfigurationModuleTemplate
 */
class ApplicationConfigurationModuleTemplate {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleTemplate</code>.
     * @alias module:keap.core.v2/model/ApplicationConfigurationModuleTemplate
     */
    constructor() { 
        
        ApplicationConfigurationModuleTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/ApplicationConfigurationModuleTemplate} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/ApplicationConfigurationModuleTemplate} The populated <code>ApplicationConfigurationModuleTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleTemplate();

            if (data.hasOwnProperty('default_country_code')) {
                obj['default_country_code'] = ApiClient.convertToType(data['default_country_code'], 'Number');
            }
            if (data.hasOwnProperty('default_user_id')) {
                obj['default_user_id'] = ApiClient.convertToType(data['default_user_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleTemplate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['default_user_id'] && !(typeof data['default_user_id'] === 'string' || data['default_user_id'] instanceof String)) {
            throw new Error("Expected the field `default_user_id` to be a primitive type in the JSON string but got " + data['default_user_id']);
        }

        return true;
    }


}



/**
 * @member {Number} default_country_code
 */
ApplicationConfigurationModuleTemplate.prototype['default_country_code'] = undefined;

/**
 * @member {String} default_user_id
 */
ApplicationConfigurationModuleTemplate.prototype['default_user_id'] = undefined;






export default ApplicationConfigurationModuleTemplate;
