# KeapCoreServiceV2Sdk.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactId** | **String** | Reference to the contact the transaction was for. | [optional] 
**id** | **String** | The unique identifier of the transaction. | [optional] 
**isLive** | **Boolean** | true if this is a live transaction, false if the transaction is a test or sandbox transaction. | [optional] 
**isSuccessful** | **Boolean** | true if the transaction resulted in a success, false if the transaction resulted in a failure or error. | [optional] 
**orderId** | **String** | Reference to the order this transaction was for | [optional] 
**paymentGatewayId** | **String** | Reference to the payment processor to where the transaction attempt was made. | [optional] 
**paymentId** | **String** | Reference to the payment record that on successful transactions. No reference if the transaction failed. | [optional] 
**paymentProcessorType** | **String** |  | [optional] 
**transactionAmount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**transactionTime** | **String** | ISO date-time of the transaction. e.g 2024-04-28 11:25:44 | [optional] 
**transactionType** | **String** | The type of transaction. Possible values: CAPTURE, VOID, REFUND, CREDIT, APPROVAL | [optional] 



## Enum: PaymentProcessorTypeEnum


* `PAYPAL` (value: `"PAYPAL"`)

* `UNSUPPORTED` (value: `"UNSUPPORTED"`)

* `AUTHORIZE` (value: `"AUTHORIZE"`)

* `EWAY` (value: `"EWAY"`)

* `WEPAY` (value: `"WEPAY"`)

* `STRIPE` (value: `"STRIPE"`)

* `KEAP_PAY` (value: `"KEAP_PAY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




