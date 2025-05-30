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
import CurrencyValue from './CurrencyValue';
import ProductInventory from './ProductInventory';
import ProductOptions from './ProductOptions';
import SubscriptionPlan from './SubscriptionPlan';

/**
 * The RestV2Product model module.
 * @module keap.core.v2/model/RestV2Product
 */
class RestV2Product {
    /**
     * Constructs a new <code>RestV2Product</code>.
     * @alias module:keap.core.v2/model/RestV2Product
     */
    constructor() { 
        
        RestV2Product.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestV2Product</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:keap.core.v2/model/RestV2Product} obj Optional instance to populate.
     * @return {module:keap.core.v2/model/RestV2Product} The populated <code>RestV2Product</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestV2Product();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('city_taxable')) {
                obj['city_taxable'] = ApiClient.convertToType(data['city_taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('country_taxable')) {
                obj['country_taxable'] = ApiClient.convertToType(data['country_taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('inventory')) {
                obj['inventory'] = ProductInventory.constructFromObject(data['inventory']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [ProductOptions]);
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = CurrencyValue.constructFromObject(data['price']);
            }
            if (data.hasOwnProperty('short_description')) {
                obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('state_taxable')) {
                obj['state_taxable'] = ApiClient.convertToType(data['state_taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('storefront_hidden')) {
                obj['storefront_hidden'] = ApiClient.convertToType(data['storefront_hidden'], 'Boolean');
            }
            if (data.hasOwnProperty('subscription_only')) {
                obj['subscription_only'] = ApiClient.convertToType(data['subscription_only'], 'Boolean');
            }
            if (data.hasOwnProperty('subscription_plans')) {
                obj['subscription_plans'] = ApiClient.convertToType(data['subscription_plans'], [SubscriptionPlan]);
            }
            if (data.hasOwnProperty('taxable')) {
                obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestV2Product</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestV2Product</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['categories'])) {
            throw new Error("Expected the field `categories` to be an array in the JSON data but got " + data['categories']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `inventory`
        if (data['inventory']) { // data not null
          ProductInventory.validateJSON(data['inventory']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                ProductOptions.validateJSON(item);
            };
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          CurrencyValue.validateJSON(data['price']);
        }
        // ensure the json data is a string
        if (data['short_description'] && !(typeof data['short_description'] === 'string' || data['short_description'] instanceof String)) {
            throw new Error("Expected the field `short_description` to be a primitive type in the JSON string but got " + data['short_description']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        if (data['subscription_plans']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['subscription_plans'])) {
                throw new Error("Expected the field `subscription_plans` to be an array in the JSON data but got " + data['subscription_plans']);
            }
            // validate the optional field `subscription_plans` (array)
            for (const item of data['subscription_plans']) {
                SubscriptionPlan.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * True means active, False means inactive
 * @member {Boolean} active
 */
RestV2Product.prototype['active'] = undefined;

/**
 * List of category ids to indicate which categories this product will belong to. Can be empty.
 * @member {Array.<String>} categories
 */
RestV2Product.prototype['categories'] = undefined;

/**
 * If city-based taxes should be applied to this product
 * @member {Boolean} city_taxable
 */
RestV2Product.prototype['city_taxable'] = undefined;

/**
 * If country-based taxes should be applied to this product
 * @member {Boolean} country_taxable
 */
RestV2Product.prototype['country_taxable'] = undefined;

/**
 * Product long description
 * @member {String} description
 */
RestV2Product.prototype['description'] = undefined;

/**
 * The product ID
 * @member {String} id
 */
RestV2Product.prototype['id'] = undefined;

/**
 * @member {module:keap.core.v2/model/ProductInventory} inventory
 */
RestV2Product.prototype['inventory'] = undefined;

/**
 * Product name
 * @member {String} name
 */
RestV2Product.prototype['name'] = undefined;

/**
 * List of product options. Can be empty.
 * @member {Array.<module:keap.core.v2/model/ProductOptions>} options
 */
RestV2Product.prototype['options'] = undefined;

/**
 * @member {module:keap.core.v2/model/CurrencyValue} price
 */
RestV2Product.prototype['price'] = undefined;

/**
 * Product short description
 * @member {String} short_description
 */
RestV2Product.prototype['short_description'] = undefined;

/**
 * Product SKU
 * @member {String} sku
 */
RestV2Product.prototype['sku'] = undefined;

/**
 * If state-based taxes should be applied to this product
 * @member {Boolean} state_taxable
 */
RestV2Product.prototype['state_taxable'] = undefined;

/**
 * If the product should not be shown in the storefront
 * @member {Boolean} storefront_hidden
 */
RestV2Product.prototype['storefront_hidden'] = undefined;

/**
 * If the product is a subscription-only product
 * @member {Boolean} subscription_only
 */
RestV2Product.prototype['subscription_only'] = undefined;

/**
 * List of subscription plans associated with the product. Can be empty.
 * @member {Array.<module:keap.core.v2/model/SubscriptionPlan>} subscription_plans
 */
RestV2Product.prototype['subscription_plans'] = undefined;

/**
 * Whether or not the product should be taxed
 * @member {Boolean} taxable
 */
RestV2Product.prototype['taxable'] = undefined;

/**
 * Product weight
 * @member {Number} weight
 */
RestV2Product.prototype['weight'] = undefined;






export default RestV2Product;
