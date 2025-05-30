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

export class HistoricalCounts {
    '_24hours'?: number;
    '_30days'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_24hours",
            "baseName": "24_hours",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "_30days",
            "baseName": "30_days",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return HistoricalCounts.attributeTypeMap;
    }

    public constructor() {
    }
}
