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
* Request model for moving specific deals.
*/
export class MoveDealsForContactsRequest {
    /**
    * List of IDs of the contacts whose active deals need to be moved.
    */
    'contactIds': Array<string>;
    /**
    * The ID of the stage from which the deals should be moved.
    */
    'fromStage': string;
    /**
    * The ID of the stage to which the deals should be moved.
    */
    'toStage': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contactIds",
            "baseName": "contact_ids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "fromStage",
            "baseName": "from_stage",
            "type": "string",
            "format": ""
        },
        {
            "name": "toStage",
            "baseName": "to_stage",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MoveDealsForContactsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
