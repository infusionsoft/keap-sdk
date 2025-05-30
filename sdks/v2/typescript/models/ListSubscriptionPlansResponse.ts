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

import { SubscriptionPlan } from '../models/SubscriptionPlan';
import { HttpFile } from '../http/http';

export class ListSubscriptionPlansResponse {
    'nextPageToken'?: string;
    'subscriptions'?: Array<SubscriptionPlan>;

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
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "Array<SubscriptionPlan>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListSubscriptionPlansResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
