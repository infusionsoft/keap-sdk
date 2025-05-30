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

/**
* Request for creating a stage.
*/
export class CreateStageRequest {
    /**
    * The name of the stage.
    */
    'name': string;
    /**
    * The ID of the pipeline to which the stage belongs.
    */
    'pipelineId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "pipelineId",
            "baseName": "pipeline_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateStageRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
