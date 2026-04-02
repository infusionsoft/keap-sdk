

# Payment


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The unique identifier of the payment. |  [optional] |
|**type** | **String** | A label describing the type of payment made. |  [optional] |
|**amount** | **Double** | The payment amount. |  [optional] |
|**note** | **String** | A note about the payment. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Provides the current status of the payment, if available. |  [optional] |
|**commissioned** | **Boolean** | Whether this payment had a commission. |  [optional] |
|**synced** | **Boolean** | Whether or not the data is synced externally. |  [optional] |
|**paymentTime** | **ZonedDateTime** | When this payment was made. In ISO-8601 format. |  [optional] |
|**refundPaymentId** | **String** | If this payment had a refund, this refers to the id of the refund payment. |  [optional] |
|**contactId** | **String** | The id of the contact the payment is associated with. |  [optional] |
|**orderIds** | **List&lt;String&gt;** | List of order ids the payment was made was against. |  [optional] |
|**updateTime** | **ZonedDateTime** | When this payment was updated. In ISO-8601 format. |  [optional] |
|**externalTransactionId** | **String** | An external id - typically from a payment processor - that references this transaction. |  [optional] |
|**merchantAccountId** | **String** | The merchant account id through which the transaction was made. |  [optional] |
|**merchantAccountType** | [**MerchantAccountTypeEnum**](#MerchantAccountTypeEnum) | The merchant account id through which the transaction was made. |  [optional] |
|**paymentMethod** | [**PaymentMethod**](PaymentMethod.md) | Details of the payment method used for this transaction. |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| APPROVED | &quot;APPROVED&quot; |
| COMPLETED | &quot;COMPLETED&quot; |
| NONE | &quot;NONE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: MerchantAccountTypeEnum

| Name | Value |
|---- | -----|
| PAYPAL | &quot;PAYPAL&quot; |
| UNSUPPORTED | &quot;UNSUPPORTED&quot; |
| AUTHORIZE | &quot;AUTHORIZE&quot; |
| EWAY | &quot;EWAY&quot; |
| WEPAY | &quot;WEPAY&quot; |
| STRIPE | &quot;STRIPE&quot; |
| KEAP_PAY | &quot;KEAP_PAY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

