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

import { ShippingDiscount } from '../models/ShippingDiscount';
import { HttpFile } from '../http/http';

export class ListShippingDiscountsResponse {
    'discounts'?: Array<ShippingDiscount>;
    'nextPageToken'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Array<ShippingDiscount>",
            "format": ""
        },
        {
            "name": "nextPageToken",
            "baseName": "next_page_token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListShippingDiscountsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
