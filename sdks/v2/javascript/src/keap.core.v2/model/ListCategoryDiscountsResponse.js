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
import CategoryDiscount from './CategoryDiscount';

/**
 * The ListCategoryDiscountsResponse model module.
 * @module keap.core.v2/model/ListCategoryDiscountsResponse
 */
class ListCategoryDiscountsResponse {
    /**
     * Constructs a new <code>ListCategoryDiscountsResponse</code>.
     * @alias module:keap.core.v2/model/ListCategoryDiscountsResponse
     */
    constructor() { 
        
        ListCategoryDiscountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListCategoryDiscountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/ListCategoryDiscountsResponse} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/ListCategoryDiscountsResponse} The populated <code>ListCategoryDiscountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListCategoryDiscountsResponse();

            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [CategoryDiscount]);
            }
            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListCategoryDiscountsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListCategoryDiscountsResponse</code>.
     */
    static validateJSON(data) {
        if (data['discounts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['discounts'])) {
                throw new Error("Expected the field `discounts` to be an array in the JSON data but got " + data['discounts']);
            }
            // validate the optional field `discounts` (array)
            for (const item of data['discounts']) {
                CategoryDiscount.validateJSON(item);
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
 * @member {Array.<module:keap.core.v2/model/CategoryDiscount>} discounts
 */
ListCategoryDiscountsResponse.prototype['discounts'] = undefined;

/**
 * @member {String} next_page_token
 */
ListCategoryDiscountsResponse.prototype['next_page_token'] = undefined;






export default ListCategoryDiscountsResponse;
