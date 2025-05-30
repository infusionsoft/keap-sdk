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
 * The LeadScore model module.
 * @module keap.core.v2/model/LeadScore
 */
class LeadScore {
    /**
     * Constructs a new <code>LeadScore</code>.
     * @alias module:keap.core.v2/model/LeadScore
     */
    constructor() { 
        
        LeadScore.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LeadScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/LeadScore} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/LeadScore} The populated <code>LeadScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LeadScore();

            if (data.hasOwnProperty('last_updated')) {
                obj['last_updated'] = ApiClient.convertToType(data['last_updated'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LeadScore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LeadScore</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['last_updated'] && !(typeof data['last_updated'] === 'string' || data['last_updated'] instanceof String)) {
            throw new Error("Expected the field `last_updated` to be a primitive type in the JSON string but got " + data['last_updated']);
        }
        // ensure the json data is a string
        if (data['score'] && !(typeof data['score'] === 'string' || data['score'] instanceof String)) {
            throw new Error("Expected the field `score` to be a primitive type in the JSON string but got " + data['score']);
        }

        return true;
    }


}



/**
 * @member {String} last_updated
 */
LeadScore.prototype['last_updated'] = undefined;

/**
 * @member {String} score
 */
LeadScore.prototype['score'] = undefined;






export default LeadScore;
