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

import { HistoricalCounts } from '../models/HistoricalCounts';
import { HttpFile } from '../http/http';

export class Goal {
    'historicalContactCounts'?: HistoricalCounts;
    'id'?: string;
    'name'?: string;
    'nextSequenceIds'?: Array<string>;
    'previousSequenceIds'?: Array<string>;
    'type'?: GoalTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "historicalContactCounts",
            "baseName": "historical_contact_counts",
            "type": "HistoricalCounts",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "nextSequenceIds",
            "baseName": "next_sequence_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "previousSequenceIds",
            "baseName": "previous_sequence_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "GoalTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Goal.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum GoalTypeEnum {
    WebForm = 'WebForm',
    LandingPage = 'LandingPage',
    Survey = 'Survey',
    LinkClick = 'LinkClick',
    EmailOpened = 'EmailOpened',
    Score = 'Score',
    Purchase = 'Purchase',
    FailedPurchase = 'FailedPurchase',
    Quote = 'Quote',
    WebsiteTrigger = 'WebsiteTrigger',
    InternalForm = 'InternalForm',
    SmartForm = 'SmartForm',
    AppointmentEvent = 'AppointmentEvent',
    Task = 'Task',
    StageMove = 'StageMove',
    Note = 'Note',
    Tag = 'Tag',
    PipelineStageMove = 'PipelineStageMove',
    UnlayerLandingPage = 'UnlayerLandingPage',
    GroSocial = 'GroSocial',
    TwitterForm = 'TwitterForm',
    Api = 'API',
    WordPress = 'WordPress',
    NewLandingPage = 'NewLandingPage',
    IntegrationTrigger = 'IntegrationTrigger'
}

