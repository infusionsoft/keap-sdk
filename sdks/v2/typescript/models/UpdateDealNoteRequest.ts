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
* Request model for updating a deal note.
*/
export class UpdateDealNoteRequest {
    /**
    * The body of the note. Must not be blank and must be between 1 and 5000 characters.
    */
    'body': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdateDealNoteRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
