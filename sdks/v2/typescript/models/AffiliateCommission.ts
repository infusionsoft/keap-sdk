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

export class AffiliateCommission {
    'affOwedId'?: number;
    'amountEarned'?: number;
    'contactFirstName'?: string;
    'contactId'?: number;
    'contactLastName'?: string;
    'dateEarned'?: Date;
    'description'?: string;
    'invoiceId'?: number;
    'productName'?: string;
    'salesAffiliateId'?: number;
    'soldByFirstName'?: string;
    'soldByLastName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "affOwedId",
            "baseName": "aff_owed_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "amountEarned",
            "baseName": "amount_earned",
            "type": "number",
            "format": "float"
        },
        {
            "name": "contactFirstName",
            "baseName": "contact_first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "contactLastName",
            "baseName": "contact_last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateEarned",
            "baseName": "date_earned",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoiceId",
            "baseName": "invoice_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "productName",
            "baseName": "product_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "salesAffiliateId",
            "baseName": "sales_affiliate_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "soldByFirstName",
            "baseName": "sold_by_first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "soldByLastName",
            "baseName": "sold_by_last_name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AffiliateCommission.attributeTypeMap;
    }

    public constructor() {
    }
}
