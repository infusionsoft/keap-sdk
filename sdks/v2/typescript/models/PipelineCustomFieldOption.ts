/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.812056
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Class representing an option for a custom field.
*/
export class PipelineCustomFieldOption {
    /**
    * The identifier of the custom field option.
    */
    'id': string;
    /**
    * The title of the custom field option.
    */
    'title': string;
    /**
    * The subtitle of the custom field option.
    */
    'subtitle': string;
    /**
    * The sort order of the custom field option.
    */
    'sortOrder': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "subtitle",
            "baseName": "subtitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "sortOrder",
            "baseName": "sort_order",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PipelineCustomFieldOption.attributeTypeMap;
    }

    public constructor() {
    }
}
