# KeapCoreServiceV2Sdk.RestV2Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPayment** | **Boolean** |  | [optional] 
**allowPaypal** | **Boolean** |  | [optional] 
**contact** | [**BasicContact**](BasicContact.md) |  | [optional] 
**creationTime** | **String** |  | [optional] 
**id** | **String** |  | [optional] 
**invoiceNumber** | **String** |  | [optional] 
**leadAffiliateId** | **String** |  | [optional] 
**modificationTime** | **String** |  | [optional] 
**notes** | **String** |  | [optional] 
**orderItems** | [**[RestV2OrderItem]**](RestV2OrderItem.md) |  | [optional] 
**orderTime** | **String** |  | [optional] 
**orderType** | **String** |  | [optional] 
**paymentPlan** | [**PaymentPlan**](PaymentPlan.md) |  | [optional] 
**recurring** | **Boolean** |  | [optional] 
**refundTotal** | **Number** |  | [optional] 
**salesAffiliateId** | **String** |  | [optional] 
**shippingInformation** | [**ShippingInformation**](ShippingInformation.md) |  | [optional] 
**sourceType** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**terms** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**total** | **Number** |  | [optional] 
**totalDue** | **Number** |  | [optional] 
**totalPaid** | **Number** |  | [optional] 



## Enum: SourceTypeEnum


* `INVOICE` (value: `"INVOICE"`)

* `API` (value: `"API"`)

* `CHECKOUT_FORM` (value: `"CHECKOUT_FORM"`)

* `MANUAL_PAYMENT` (value: `"MANUAL_PAYMENT"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `QBO_SYNC` (value: `"QBO_SYNC"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




