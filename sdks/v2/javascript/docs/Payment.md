# KeapCoreServiceV2Sdk.Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the payment. | [optional] 
**type** | **String** | A label describing the type of payment made. | [optional] 
**amount** | **Number** | The payment amount. | [optional] 
**note** | **String** | A note about the payment. | [optional] 
**status** | **String** | Provides the current status of the payment, if available. | [optional] 
**commissioned** | **Boolean** | Whether this payment had a commission. | [optional] 
**synced** | **Boolean** | Whether or not the data is synced externally. | [optional] 
**paymentTime** | **Date** | When this payment was made. In ISO-8601 format. | [optional] 
**refundPaymentId** | **String** | If this payment had a refund, this refers to the id of the refund payment. | [optional] 
**contactId** | **String** | The id of the contact the payment is associated with. | [optional] 
**orderIds** | **[String]** | List of order ids the payment was made was against. | [optional] 
**updateTime** | **Date** | When this payment was updated. In ISO-8601 format. | [optional] 
**externalTransactionId** | **String** | An external id - typically from a payment processor - that references this transaction. | [optional] 
**merchantAccountId** | **String** | The merchant account id through which the transaction was made. | [optional] 
**merchantAccountType** | **String** | The merchant account id through which the transaction was made. | [optional] 
**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) | Details of the payment method used for this transaction. | [optional] 



## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `APPROVED` (value: `"APPROVED"`)

* `COMPLETED` (value: `"COMPLETED"`)

* `NONE` (value: `"NONE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: MerchantAccountTypeEnum


* `PAYPAL` (value: `"PAYPAL"`)

* `UNSUPPORTED` (value: `"UNSUPPORTED"`)

* `AUTHORIZE` (value: `"AUTHORIZE"`)

* `EWAY` (value: `"EWAY"`)

* `WEPAY` (value: `"WEPAY"`)

* `STRIPE` (value: `"STRIPE"`)

* `KEAP_PAY` (value: `"KEAP_PAY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




