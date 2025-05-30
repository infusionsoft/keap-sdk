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
* Enum class PipelineCustomFieldDisplayStyle.
* @enum {}
* @readonly
*/
export default class PipelineCustomFieldDisplayStyle {
    
        /**
         * value: "QUOTE"
         * @const
         */
        "QUOTE" = "QUOTE";

    
        /**
         * value: "BOLD"
         * @const
         */
        "BOLD" = "BOLD";

    
        /**
         * value: "ALIGN_END"
         * @const
         */
        "ALIGN_END" = "ALIGN_END";

    
        /**
         * value: "ITALIC"
         * @const
         */
        "ITALIC" = "ITALIC";

    
        /**
         * value: "LARGE"
         * @const
         */
        "LARGE" = "LARGE";

    
        /**
         * value: "MEDIUM"
         * @const
         */
        "MEDIUM" = "MEDIUM";

    
        /**
         * value: "SMALL"
         * @const
         */
        "SMALL" = "SMALL";

    
        /**
         * value: "XS"
         * @const
         */
        "XS" = "XS";

    
        /**
         * value: "CENTER"
         * @const
         */
        "CENTER" = "CENTER";

    
        /**
         * value: "HYPHENATED"
         * @const
         */
        "HYPHENATED" = "HYPHENATED";

    
        /**
         * value: "LABELED"
         * @const
         */
        "LABELED" = "LABELED";

    
        /**
         * value: "unknown_default_open_api"
         * @const
         */
        "unknown_default_open_api" = "unknown_default_open_api";

    

    /**
    * Returns a <code>PipelineCustomFieldDisplayStyle</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:keap.core.v2/model/PipelineCustomFieldDisplayStyle} The enum <code>PipelineCustomFieldDisplayStyle</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
