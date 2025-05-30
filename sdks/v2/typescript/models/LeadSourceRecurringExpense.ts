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

import { CurrencyValue } from '../models/CurrencyValue';
import { HttpFile } from '../http/http';

export class LeadSourceRecurringExpense {
    'amount'?: CurrencyValue;
    /**
    * The time this lead source recurring expense was created
    */
    'createTime'?: string;
    /**
    * The time this lead source recurring expense end
    */
    'endTime'?: string;
    /**
    * The ID of the lead source recurring expense
    */
    'id'?: string;
    /**
    * The ID of the lead source the recurring expense belongs to
    */
    'leadSourceId'?: string;
    /**
    * The time this lead source recurring expense will incur a new expense
    */
    'nextExpenseTime'?: string;
    /**
    * The notes for the lead source recurring expense
    */
    'notes'?: string;
    /**
    * The time this lead source recurring expense starts
    */
    'startTime'?: string;
    /**
    * The title of the lead source recurring expense
    */
    'title'?: string;
    /**
    * The time this lead source recurring expense was last updated
    */
    'updateTime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "CurrencyValue",
            "format": ""
        },
        {
            "name": "createTime",
            "baseName": "create_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "endTime",
            "baseName": "end_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "leadSourceId",
            "baseName": "lead_source_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextExpenseTime",
            "baseName": "next_expense_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "string",
            "format": ""
        },
        {
            "name": "startTime",
            "baseName": "start_time",
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
            "name": "updateTime",
            "baseName": "update_time",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LeadSourceRecurringExpense.attributeTypeMap;
    }

    public constructor() {
    }
}
