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
 * The ApplicationConfigurationModuleAppointment model module.
 * @module keap.core.v2/model/ApplicationConfigurationModuleAppointment
 */
class ApplicationConfigurationModuleAppointment {
    /**
     * Constructs a new <code>ApplicationConfigurationModuleAppointment</code>.
     * @alias module:keap.core.v2/model/ApplicationConfigurationModuleAppointment
     */
    constructor() { 
        
        ApplicationConfigurationModuleAppointment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApplicationConfigurationModuleAppointment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/ApplicationConfigurationModuleAppointment} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/ApplicationConfigurationModuleAppointment} The populated <code>ApplicationConfigurationModuleAppointment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApplicationConfigurationModuleAppointment();

            if (data.hasOwnProperty('appointment_types')) {
                obj['appointment_types'] = ApiClient.convertToType(data['appointment_types'], 'String');
            }
            if (data.hasOwnProperty('share_opportunity_with_related_user')) {
                obj['share_opportunity_with_related_user'] = ApiClient.convertToType(data['share_opportunity_with_related_user'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApplicationConfigurationModuleAppointment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApplicationConfigurationModuleAppointment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['appointment_types'] && !(typeof data['appointment_types'] === 'string' || data['appointment_types'] instanceof String)) {
            throw new Error("Expected the field `appointment_types` to be a primitive type in the JSON string but got " + data['appointment_types']);
        }

        return true;
    }


}



/**
 * @member {String} appointment_types
 */
ApplicationConfigurationModuleAppointment.prototype['appointment_types'] = undefined;

/**
 * @member {Boolean} share_opportunity_with_related_user
 */
ApplicationConfigurationModuleAppointment.prototype['share_opportunity_with_related_user'] = undefined;






export default ApplicationConfigurationModuleAppointment;
