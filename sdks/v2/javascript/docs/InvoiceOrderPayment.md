# KeapCoreServiceV2Sdk.InvoiceOrderPayment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The invoice order payment ID. | [optional] 
**amount** | **Number** | The payment amount. | [optional] 
**note** | **String** | A note about the payment. | [optional] 
**invoiceId** | **String** | The invoice ID. | [optional] 
**paymentId** | **String** | The payment ID. | [optional] 
**payTime** | **Date** | The date and time of payment. | [optional] 
**payStatus** | **String** | The payment status. | [optional] 
**lastUpdatedTime** | **Date** | When this payment record was last updated. | [optional] 
**skipCommission** | **Boolean** | Whether to skip commission for this payment. | [optional] 
**refundInvoicePaymentId** | **String** | The refund invoice payment ID, if this is a refund. | [optional] 



## Enum: PayStatusEnum


* `MANUAL_PAID` (value: `"MANUAL_PAID"`)

* `REFUNDED` (value: `"REFUNDED"`)

* `VOIDED` (value: `"VOIDED"`)

* `PAYPAL_PAID` (value: `"PAYPAL_PAID"`)

* `APPROVED` (value: `"APPROVED"`)

* `FAILED` (value: `"FAILED"`)

* `ERROR` (value: `"ERROR"`)

* `PENDING` (value: `"PENDING"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




