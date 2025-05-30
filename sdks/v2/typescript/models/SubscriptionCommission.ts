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

export class SubscriptionCommission {
    'dollarAmount'?: number;
    'name'?: string;
    'percentage'?: number;
    'planPrice'?: number;
    'subscriptionId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dollarAmount",
            "baseName": "dollar_amount",
            "type": "number",
            "format": "double"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "percentage",
            "baseName": "percentage",
            "type": "number",
            "format": "double"
        },
        {
            "name": "planPrice",
            "baseName": "plan_price",
            "type": "number",
            "format": "double"
        },
        {
            "name": "subscriptionId",
            "baseName": "subscription_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionCommission.attributeTypeMap;
    }

    public constructor() {
    }
}
