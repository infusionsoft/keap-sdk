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

import { PipelineCustomFieldCardProperty } from '../models/PipelineCustomFieldCardProperty';
import { HttpFile } from '../http/http';

/**
* Class representing display options for a card custom field.
*/
export class PipelineCustomFieldCardDisplayOptions {
    /**
    * The properties of the card custom field.
    */
    'cardProperties'?: Array<PipelineCustomFieldCardProperty> | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cardProperties",
            "baseName": "card_properties",
            "type": "Array<PipelineCustomFieldCardProperty>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PipelineCustomFieldCardDisplayOptions.attributeTypeMap;
    }

    public constructor() {
    }
}
