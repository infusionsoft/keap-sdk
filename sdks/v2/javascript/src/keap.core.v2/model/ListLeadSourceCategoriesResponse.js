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
import LeadSourceCategory from './LeadSourceCategory';

/**
 * The ListLeadSourceCategoriesResponse model module.
 * @module keap.core.v2/model/ListLeadSourceCategoriesResponse
 */
class ListLeadSourceCategoriesResponse {
    /**
     * Constructs a new <code>ListLeadSourceCategoriesResponse</code>.
     * @alias module:keap.core.v2/model/ListLeadSourceCategoriesResponse
     */
    constructor() { 
        
        ListLeadSourceCategoriesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListLeadSourceCategoriesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/ListLeadSourceCategoriesResponse} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/ListLeadSourceCategoriesResponse} The populated <code>ListLeadSourceCategoriesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListLeadSourceCategoriesResponse();

            if (data.hasOwnProperty('lead_source_categories')) {
                obj['lead_source_categories'] = ApiClient.convertToType(data['lead_source_categories'], [LeadSourceCategory]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListLeadSourceCategoriesResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListLeadSourceCategoriesResponse</code>.
     */
    static validateJSON(data) {
        if (data['lead_source_categories']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['lead_source_categories'])) {
                throw new Error("Expected the field `lead_source_categories` to be an array in the JSON data but got " + data['lead_source_categories']);
            }
            // validate the optional field `lead_source_categories` (array)
            for (const item of data['lead_source_categories']) {
                LeadSourceCategory.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }

        return true;
    }


}



/**
 * The lead source categories in the current page
 * @member {Array.<module:keap.core.v2/model/LeadSourceCategory>} lead_source_categories
 */
ListLeadSourceCategoriesResponse.prototype['lead_source_categories'] = undefined;

/**
 * @member {String} next_page_token
 */
ListLeadSourceCategoriesResponse.prototype['next_page_token'] = undefined;






export default ListLeadSourceCategoriesResponse;
