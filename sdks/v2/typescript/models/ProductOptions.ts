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

import { ProductFixedOption } from '../models/ProductFixedOption';
import { ProductVariableSetting } from '../models/ProductVariableSetting';
import { HttpFile } from '../http/http';

export class ProductOptions {
    /**
    * List of option values for the fixed option
    */
    'fixedOptions'?: Array<ProductFixedOption>;
    /**
    * The option name
    */
    'name'?: string;
    /**
    * If the user is required to select/fill in an option for the product
    */
    'required'?: boolean;
    /**
    * Can be FIXED or VARIABLE. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned.
    */
    'type'?: ProductOptionsTypeEnum;
    'variableSetting'?: ProductVariableSetting;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fixedOptions",
            "baseName": "fixed_options",
            "type": "Array<ProductFixedOption>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ProductOptionsTypeEnum",
            "format": ""
        },
        {
            "name": "variableSetting",
            "baseName": "variable_setting",
            "type": "ProductVariableSetting",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ProductOptionsTypeEnum {
    Fixed = 'FIXED',
    Variable = 'VARIABLE'
}

