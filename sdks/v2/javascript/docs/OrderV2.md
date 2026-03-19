# KeapCoreServiceV2Sdk.OrderV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for the order | [optional] 
**title** | **String** | Title of the order | [optional] 
**status** | **String** | The order status. | [optional] 
**total** | [**CurrencyValue**](CurrencyValue.md) | The total amount of the order. | [optional] 
**contact** | [**BasicContact**](BasicContact.md) | Contact associated with this order | [optional] 
**notes** | **String** | Internal notes for the order | [optional] 
**terms** | **String** | Order terms and conditions | [optional] 
**orderType** | **String** | The order type. | [optional] 
**sourceType** | **String** | The source where the order was created. | [optional] 
**creationTime** | **Date** | When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**modificationTime** | **Date** | When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**orderTime** | **Date** | A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 
**leadAffiliateId** | **String** | ID of the lead affiliate | [optional] 
**salesAffiliateId** | **String** | ID of the sales affiliate | [optional] 
**totalPaid** | [**CurrencyValue**](CurrencyValue.md) | The total amount paid to the order. | [optional] 
**totalDue** | [**CurrencyValue**](CurrencyValue.md) | The total amount of the order that is due. This is not current balance. | [optional] 
**shippingInformation** | [**ShippingInformation**](ShippingInformation.md) | Shipping details for the order | [optional] 
**refundTotal** | [**CurrencyValue**](CurrencyValue.md) | Total amount refunded | [optional] 
**allowPayment** | **Boolean** | Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**allowPaypal** | **Boolean** | Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition. | [optional] 
**orderItems** | [**[OrderItem]**](OrderItem.md) | List of items in the order | [optional] 
**paymentPlan** | [**PaymentPlan**](PaymentPlan.md) | Payment plan details if applicable | [optional] 
**invoiceNumber** | **String** | The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported. | [optional] 
**files** | [**[InvoiceFile]**](InvoiceFile.md) | A list of attached files to this order. Applies only to Keap Pro/Max edition. | [optional] 
**creditStatus** | **String** | Credit status of the order | [optional] 
**promoCode** | **String** | Promotional code applied | [optional] 
**refundStatus** | **String** | Refund status | [optional] 
**synced** | **Boolean** | Whether order is synced with external systems | [optional] 
**invoiceId** | **String** | Associated invoice ID | [optional] 
**customFields** | [**[CustomFieldValue]**](CustomFieldValue.md) | List of custom field values applied to this order | [optional] 



## Enum: StatusEnum


* `DRAFT` (value: `"DRAFT"`)

* `SENT` (value: `"SENT"`)

* `VIEWED` (value: `"VIEWED"`)

* `PAID` (value: `"PAID"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: OrderTypeEnum


* `ONLINE` (value: `"ONLINE"`)

* `OFFLINE` (value: `"OFFLINE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: SourceTypeEnum


* `API` (value: `"API"`)

* `CHECKOUT_FORM` (value: `"CHECKOUT_FORM"`)

* `INVOICE` (value: `"INVOICE"`)

* `MANUAL_PAYMENT` (value: `"MANUAL_PAYMENT"`)

* `QUICKBOOKS` (value: `"QUICKBOOKS"`)

* `UNKNOWN` (value: `"UNKNOWN"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




