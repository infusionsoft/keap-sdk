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

export class CardInfo {
    'brand'?: string;
    'cardType'?: CardInfoCardTypeEnum;
    'expirationMonth'?: string;
    'expirationYear'?: string;
    'lastFour'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardType",
            "baseName": "card_type",
            "type": "CardInfoCardTypeEnum",
            "format": ""
        },
        {
            "name": "expirationMonth",
            "baseName": "expiration_month",
            "type": "string",
            "format": ""
        },
        {
            "name": "expirationYear",
            "baseName": "expiration_year",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastFour",
            "baseName": "last_four",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CardInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CardInfoCardTypeEnum {
    Credit = 'CREDIT',
    Debit = 'DEBIT',
    Prepaid = 'PREPAID',
    Ach = 'ACH'
}

