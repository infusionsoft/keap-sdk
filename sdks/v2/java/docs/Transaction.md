

# Transaction


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**contactId** | **String** | Reference to the contact the transaction was for. |  [optional] |
|**id** | **String** | The unique identifier of the transaction. |  [optional] |
|**isLive** | **Boolean** | true if this is a live transaction, false if the transaction is a test or sandbox transaction. |  [optional] |
|**isSuccessful** | **Boolean** | true if the transaction resulted in a success, false if the transaction resulted in a failure or error. |  [optional] |
|**orderId** | **String** | Reference to the order this transaction was for |  [optional] |
|**paymentGatewayId** | **String** | Reference to the payment processor to where the transaction attempt was made. |  [optional] |
|**paymentId** | **String** | Reference to the payment record that on successful transactions. No reference if the transaction failed. |  [optional] |
|**paymentProcessorType** | [**PaymentProcessorTypeEnum**](#PaymentProcessorTypeEnum) |  |  [optional] |
|**transactionAmount** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**transactionTime** | **String** | ISO date-time of the transaction. e.g 2024-04-28 11:25:44 |  [optional] |
|**transactionType** | **String** | The type of transaction. Possible values: CAPTURE, VOID, REFUND, CREDIT, APPROVAL |  [optional] |



## Enum: PaymentProcessorTypeEnum

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

