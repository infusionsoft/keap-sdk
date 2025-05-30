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

import { Report } from '../models/Report';
import { HttpFile } from '../http/http';

export class ListReportsResponse {
    'nextPageToken'?: string;
    'reports'?: Array<Report>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "reports",
            "baseName": "reports",
            "type": "Array<Report>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListReportsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
