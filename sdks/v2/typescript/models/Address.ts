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

export class Address {
    /**
    * The long-name descriptive version of the Country Code
    */
    'country'?: string;
    /**
    * An ISO 3166-2 Country Code (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)
    */
    'countryCode'?: string;
    'field'?: AddressFieldEnum;
    'line1'?: string;
    'line2'?: string;
    /**
    * The municipality to which the address belongs
    */
    'locality'?: string;
    'postalCode'?: string;
    /**
    * The long-name descriptive version of the Region Code
    */
    'region'?: string;
    /**
    * An ISO 3166-2 Province Code, such as one of the US States (https://en.wikipedia.org/wiki/ISO_3166-2:US)
    */
    'regionCode'?: string;
    'zipCode'?: string;
    'zipFour'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "country_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "field",
            "baseName": "field",
            "type": "AddressFieldEnum",
            "format": ""
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string",
            "format": ""
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string",
            "format": ""
        },
        {
            "name": "locality",
            "baseName": "locality",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "regionCode",
            "baseName": "region_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipCode",
            "baseName": "zip_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "zipFour",
            "baseName": "zip_four",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Address.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum AddressFieldEnum {
    AddressFieldUnspecified = 'ADDRESS_FIELD_UNSPECIFIED',
    Billing = 'BILLING',
    Shipping = 'SHIPPING',
    Other = 'OTHER'
}

