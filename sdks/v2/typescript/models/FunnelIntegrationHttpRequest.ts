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

export class FunnelIntegrationHttpRequest {
    /**
    * The body of the HTTP request that will be made when this action is processed in the builder(s).
    */
    'body'?: string;
    /**
    * The type of HTTP request that will be made when this action is processed in the builder(s).
    */
    'callType'?: string;
    /**
    * A map of the header parameters of the HTTP request that will be made when this action is processed in the builder(s).
    */
    'headerParameters'?: { [key: string]: string; };
    /**
    * A map of the query parameters of the HTTP request that will be made when this action is processed in the builder(s).
    */
    '_queryParameters'?: { [key: string]: string; };
    /**
    * The URL of the HTTP request that will be made when this action is processed in the builder(s).
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "callType",
            "baseName": "call_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "headerParameters",
            "baseName": "header_parameters",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "_queryParameters",
            "baseName": "query_parameters",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FunnelIntegrationHttpRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
