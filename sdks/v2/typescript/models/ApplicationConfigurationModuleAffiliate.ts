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

import { ApplicationConfigurationModuleAffiliateCommission } from '../models/ApplicationConfigurationModuleAffiliateCommission';
import { HttpFile } from '../http/http';

export class ApplicationConfigurationModuleAffiliate {
    'chooseAffiliate'?: boolean;
    'commission'?: ApplicationConfigurationModuleAffiliateCommission;
    'customAffiliateUrl'?: string;
    'displayAffiliateIpAddress'?: boolean;
    'doNotNotifyAffiliate'?: boolean;
    'skipPayIfUnused'?: boolean;
    'useReferralHistoryIfNoTrackingCookie'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "chooseAffiliate",
            "baseName": "choose_affiliate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "commission",
            "baseName": "commission",
            "type": "ApplicationConfigurationModuleAffiliateCommission",
            "format": ""
        },
        {
            "name": "customAffiliateUrl",
            "baseName": "custom_affiliate_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayAffiliateIpAddress",
            "baseName": "display_affiliate_ip_address",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "doNotNotifyAffiliate",
            "baseName": "do_not_notify_affiliate",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "skipPayIfUnused",
            "baseName": "skip_pay_if_unused",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "useReferralHistoryIfNoTrackingCookie",
            "baseName": "use_referral_history_if_no_tracking_cookie",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApplicationConfigurationModuleAffiliate.attributeTypeMap;
    }

    public constructor() {
    }
}
