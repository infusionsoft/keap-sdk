

# InvoiceOrderPayment


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The invoice order payment ID. |  [optional] |
|**amount** | **BigDecimal** | The payment amount. |  [optional] |
|**note** | **String** | A note about the payment. |  [optional] |
|**invoiceId** | **String** | The invoice ID. |  [optional] |
|**paymentId** | **String** | The payment ID. |  [optional] |
|**payTime** | **ZonedDateTime** | The date and time of payment. |  [optional] |
|**payStatus** | [**PayStatusEnum**](#PayStatusEnum) | The payment status. |  [optional] |
|**lastUpdatedTime** | **ZonedDateTime** | When this payment record was last updated. |  [optional] |
|**skipCommission** | **Boolean** | Whether to skip commission for this payment. |  [optional] |
|**refundInvoicePaymentId** | **String** | The refund invoice payment ID, if this is a refund. |  [optional] |



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

