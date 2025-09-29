# KeapCoreServiceV2Sdk.Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowPayment** | **Boolean** | Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**allowPaypal** | **Boolean** | Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**contact** | [**BasicContact**](BasicContact.md) |  | [optional] 
**creationTime** | **String** | When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**files** | [**[InvoiceFile]**](InvoiceFile.md) | A list of attached files to this order. Applies only to Keap Pro/Max edition. | [optional] 
**id** | **String** |  | [optional] 
**invoiceNumber** | **String** | The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported. | [optional] 
**leadAffiliateId** | **String** |  | [optional] 
**modificationTime** | **String** | When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**notes** | **String** |  | [optional] 
**orderItems** | [**[OrderItem]**](OrderItem.md) |  | [optional] 
**orderTime** | **String** | A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**orderType** | **String** | The order type. Valid values are: ONLINE, OFFLINE. | [optional] 
**paymentPlan** | [**PaymentPlan**](PaymentPlan.md) |  | [optional] 
**refundTotal** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**salesAffiliateId** | **String** |  | [optional] 
**shippingInformation** | [**ShippingInformation**](ShippingInformation.md) |  | [optional] 
**sourceType** | **String** | The source where the order was created. Valid values include: API, CHECKOUT_FORM, INVOICE, MANUAL_PAYMENT, QUICKBOOKS, UNKNOWN. | [optional] 
**status** | **String** | The order status. Valid values are: DRAFT, SENT, VIEWED, PAID. | [optional] 
**terms** | **String** |  | [optional] 
**title** | **String** |  | [optional] 
**total** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**totalDue** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**totalPaid** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 



## Enum: OrderTypeEnum


* `OFFLINE` (value: `"OFFLINE"`)

* `ONLINE` (value: `"ONLINE"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: SourceTypeEnum


* `INVOICE` (value: `"INVOICE"`)

* `API` (value: `"API"`)

* `CHECKOUT_FORM` (value: `"CHECKOUT_FORM"`)

* `MANUAL_PAYMENT` (value: `"MANUAL_PAYMENT"`)

* `QUICKBOOKS` (value: `"QUICKBOOKS"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: StatusEnum


* `DRAFT` (value: `"DRAFT"`)

* `PAID` (value: `"PAID"`)

* `SENT` (value: `"SENT"`)

* `VIEWED` (value: `"VIEWED"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




