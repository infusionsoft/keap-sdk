

# RestV2Order


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**allowPayment** | **Boolean** | Whether or not card-related payments should be allowed on this order. Applies only to Keap Pro/Max edition. |  [optional] |
|**allowPaypal** | **Boolean** | Whether or not PayPal payments should be allowed on this order. Applies only to Keap Pro/Max edition. |  [optional] |
|**contact** | [**BasicContact**](BasicContact.md) |  |  [optional] |
|**creationTime** | **String** | When this order was originally created. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**files** | [**List&lt;InvoiceFile&gt;**](InvoiceFile.md) | A list of attached files to this order. Applies only to Keap Pro/Max edition. |  [optional] |
|**id** | **String** |  |  [optional] |
|**invoiceNumber** | **String** | The associated invoice identifier. Applies only to Keap Pro/Max edition. Feature not yet supported. |  [optional] |
|**leadAffiliateId** | **String** |  |  [optional] |
|**modificationTime** | **String** | When this order was changed. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**notes** | **String** |  |  [optional] |
|**orderItems** | [**List&lt;RestV2OrderItem&gt;**](RestV2OrderItem.md) |  |  [optional] |
|**orderTime** | **String** | A user-defined date and time of the order. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) |  [optional] |
|**orderType** | [**OrderTypeEnum**](#OrderTypeEnum) | The order type. Valid values are: ONLINE, OFFLINE. |  [optional] |
|**paymentPlan** | [**PaymentPlan**](PaymentPlan.md) |  |  [optional] |
|**refundTotal** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**salesAffiliateId** | **String** |  |  [optional] |
|**shippingInformation** | [**ShippingInformation**](ShippingInformation.md) |  |  [optional] |
|**sourceType** | [**SourceTypeEnum**](#SourceTypeEnum) | The source where the order was created. Valid values include: API, CHECKOUT_FORM, INVOICE, MANUAL_PAYMENT, QUICKBOOKS, UNKNOWN. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | The order status. Valid values are: DRAFT, SENT, VIEWED, PAID. |  [optional] |
|**terms** | **String** |  |  [optional] |
|**title** | **String** |  |  [optional] |
|**total** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**totalDue** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**totalPaid** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |



## Enum: OrderTypeEnum

| Name | Value |
|---- | -----|
| OFFLINE | &quot;OFFLINE&quot; |
| ONLINE | &quot;ONLINE&quot; |
| UNKNOWN | &quot;UNKNOWN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: SourceTypeEnum

| Name | Value |
|---- | -----|
| INVOICE | &quot;INVOICE&quot; |
| API | &quot;API&quot; |
| CHECKOUT_FORM | &quot;CHECKOUT_FORM&quot; |
| MANUAL_PAYMENT | &quot;MANUAL_PAYMENT&quot; |
| QUICKBOOKS | &quot;QUICKBOOKS&quot; |
| UNKNOWN | &quot;UNKNOWN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| DRAFT | &quot;DRAFT&quot; |
| PAID | &quot;PAID&quot; |
| SENT | &quot;SENT&quot; |
| VIEWED | &quot;VIEWED&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

