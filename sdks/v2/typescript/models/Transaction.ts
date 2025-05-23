/**
 * Keap REST API
 * Keap REST Core Service
 *
 * OpenAPI spec version: 2.70.0.809589
 * Contact: api@keap.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CurrencyValue } from '../models/CurrencyValue';
import { HttpFile } from '../http/http';

export class Transaction {
    /**
    * Reference to the contact the transaction was for.
    */
    'contactId'?: string;
    /**
    * The unique identifier of the transaction.
    */
    'id'?: string;
    /**
    * true if this is a live transaction, false if the transaction is a test or sandbox transaction.
    */
    'isLive'?: boolean;
    /**
    * true if the transaction resulted in a success, false if the transaction resulted in a failure or error.
    */
    'isSuccessful'?: boolean;
    /**
    * Reference to the order this transaction was for
    */
    'orderId'?: string;
    /**
    * Reference to the payment processor to where the transaction attempt was made.
    */
    'paymentGatewayId'?: string;
    /**
    * Reference to the payment record that on successful transactions. No reference if the transaction failed.
    */
    'paymentId'?: string;
    'paymentProcessorType'?: TransactionPaymentProcessorTypeEnum;
    'transactionAmount'?: CurrencyValue;
    /**
    * ISO date-time of the transaction. e.g 2024-04-28 11:25:44
    */
    'transactionTime'?: string;
    /**
    * The type of transaction. Possible values: CAPTURE, VOID, REFUND, CREDIT, APPROVAL
    */
    'transactionType'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "contactId",
            "baseName": "contact_id",
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
            "name": "isLive",
            "baseName": "is_live",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isSuccessful",
            "baseName": "is_successful",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentGatewayId",
            "baseName": "payment_gateway_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentId",
            "baseName": "payment_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentProcessorType",
            "baseName": "payment_processor_type",
            "type": "TransactionPaymentProcessorTypeEnum",
            "format": ""
        },
        {
            "name": "transactionAmount",
            "baseName": "transaction_amount",
            "type": "CurrencyValue",
            "format": ""
        },
        {
            "name": "transactionTime",
            "baseName": "transaction_time",
            "type": "string",
            "format": ""
        },
        {
            "name": "transactionType",
            "baseName": "transaction_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transaction.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum TransactionPaymentProcessorTypeEnum {
    Paypal = 'PAYPAL',
    Unsupported = 'UNSUPPORTED',
    Authorize = 'AUTHORIZE',
    Eway = 'EWAY',
    Wepay = 'WEPAY',
    Stripe = 'STRIPE',
    KeapPay = 'KEAP_PAY'
}

