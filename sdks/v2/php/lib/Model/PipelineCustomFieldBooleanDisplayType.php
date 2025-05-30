<?php
/**
 * PipelineCustomFieldBooleanDisplayType
 *
 * PHP version 8.1
 *
 * @category Class
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Keap REST API
 *
 * Keap REST Core Service
 *
 * The version of the OpenAPI document: 2.70.0.812056
 * Contact: api@keap.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.13.0
 */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace Keap\Core\V2\Model;
use \Keap\Core\V2\ObjectSerializer;

/**
 * PipelineCustomFieldBooleanDisplayType Class Doc Comment
 *
 * @category Class
 * @description Enum representing the display types for a boolean custom field.
 * @package  Keap\Core\V2
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class PipelineCustomFieldBooleanDisplayType
{
    /**
     * Possible values of this enum
     */
    public const RADIO = 'RADIO';

    public const CHECKBOX = 'CHECKBOX';

    public const TOGGLE = 'TOGGLE';

    public const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues()
    {
        return [
            self::RADIO,
            self::CHECKBOX,
            self::TOGGLE,
            self::TOGGLE_BUTTON
        ];
    }
}


