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

import { ApplicationConfigurationModuleOpportunityStates } from '../models/ApplicationConfigurationModuleOpportunityStates';
import { HttpFile } from '../http/http';

export class ApplicationConfigurationModuleOpportunity {
    'defaultStage'?: string;
    'states'?: ApplicationConfigurationModuleOpportunityStates;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "defaultStage",
            "baseName": "default_stage",
            "type": "string",
            "format": ""
        },
        {
            "name": "states",
            "baseName": "states",
            "type": "ApplicationConfigurationModuleOpportunityStates",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationConfigurationModuleOpportunity.attributeTypeMap;
    }

    public constructor() {
    }
}
