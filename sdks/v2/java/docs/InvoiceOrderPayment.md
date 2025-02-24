

# InvoiceOrderPayment


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**amount** | **BigDecimal** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**invoiceId** | **String** |  |  [optional] |
|**lastUpdatedTime** | **String** |  |  [optional] |
|**note** | **String** |  |  [optional] |
|**payStatus** | [**PayStatusEnum**](#PayStatusEnum) |  |  [optional] |
|**payTime** | **String** |  |  [optional] |
|**paymentId** | **String** |  |  [optional] |
|**refundInvoicePaymentId** | **String** |  |  [optional] |
|**skipCommission** | **Boolean** |  |  [optional] |



## Enum: PayStatusEnum

| Name | Value |
|---- | -----|
| MANUAL_PAID | &quot;MANUAL_PAID&quot; |
| REFUNDED | &quot;REFUNDED&quot; |
| VOIDED | &quot;VOIDED&quot; |
| PAYPAL_PAID | &quot;PAYPAL_PAID&quot; |
| APPROVED | &quot;APPROVED&quot; |
| FAILED | &quot;FAILED&quot; |
| ERROR | &quot;ERROR&quot; |
| PENDING | &quot;PENDING&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

