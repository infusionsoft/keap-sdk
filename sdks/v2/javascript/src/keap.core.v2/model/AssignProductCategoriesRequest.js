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
 * The AssignProductCategoriesRequest model module.
 * @module keap.core.v2/model/AssignProductCategoriesRequest
 */
class AssignProductCategoriesRequest {
    /**
     * Constructs a new <code>AssignProductCategoriesRequest</code>.
     * @alias module:keap.core.v2/model/AssignProductCategoriesRequest
     * @param productCategoryIds {Array.<String>} 
     */
    constructor(productCategoryIds) { 
        
        AssignProductCategoriesRequest.initialize(this, productCategoryIds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productCategoryIds) { 
        obj['product_category_ids'] = productCategoryIds;
    }

    /**
     * Constructs a <code>AssignProductCategoriesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/AssignProductCategoriesRequest} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/AssignProductCategoriesRequest} The populated <code>AssignProductCategoriesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssignProductCategoriesRequest();

            if (data.hasOwnProperty('product_category_ids')) {
                obj['product_category_ids'] = ApiClient.convertToType(data['product_category_ids'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssignProductCategoriesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssignProductCategoriesRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AssignProductCategoriesRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['product_category_ids'])) {
            throw new Error("Expected the field `product_category_ids` to be an array in the JSON data but got " + data['product_category_ids']);
        }

        return true;
    }


}

AssignProductCategoriesRequest.RequiredProperties = ["product_category_ids"];

/**
 * @member {Array.<String>} product_category_ids
 */
AssignProductCategoriesRequest.prototype['product_category_ids'] = undefined;






export default AssignProductCategoriesRequest;
