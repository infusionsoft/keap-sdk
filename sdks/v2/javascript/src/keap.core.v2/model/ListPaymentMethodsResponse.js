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
import PaymentMethod from './PaymentMethod';

/**
 * The ListPaymentMethodsResponse model module.
 * @module keap.core.v2/model/ListPaymentMethodsResponse
 */
class ListPaymentMethodsResponse {
    /**
     * Constructs a new <code>ListPaymentMethodsResponse</code>.
     * @alias module:keap.core.v2/model/ListPaymentMethodsResponse
     */
    constructor() { 
        
        ListPaymentMethodsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ListPaymentMethodsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/ListPaymentMethodsResponse} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/ListPaymentMethodsResponse} The populated <code>ListPaymentMethodsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListPaymentMethodsResponse();

            if (data.hasOwnProperty('next_page_token')) {
                obj['next_page_token'] = ApiClient.convertToType(data['next_page_token'], 'String');
            }
            if (data.hasOwnProperty('records')) {
                obj['records'] = ApiClient.convertToType(data['records'], [PaymentMethod]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListPaymentMethodsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListPaymentMethodsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['next_page_token'] && !(typeof data['next_page_token'] === 'string' || data['next_page_token'] instanceof String)) {
            throw new Error("Expected the field `next_page_token` to be a primitive type in the JSON string but got " + data['next_page_token']);
        }
        if (data['records']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['records'])) {
                throw new Error("Expected the field `records` to be an array in the JSON data but got " + data['records']);
            }
            // validate the optional field `records` (array)
            for (const item of data['records']) {
                PaymentMethod.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} next_page_token
 */
ListPaymentMethodsResponse.prototype['next_page_token'] = undefined;

/**
 * @member {Array.<module:keap.core.v2/model/PaymentMethod>} records
 */
ListPaymentMethodsResponse.prototype['records'] = undefined;






export default ListPaymentMethodsResponse;
