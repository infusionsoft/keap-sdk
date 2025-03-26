

# PaymentMethod


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cardInfo** | [**CardInfo**](CardInfo.md) |  |  [optional] |
|**contactId** | **String** |  |  [optional] |
|**createdTime** | **String** |  |  [optional] |
|**paymentGatewayId** | **String** |  |  [optional] |
|**paymentMethodId** | **String** |  |  [optional] |
|**paymentMethodType** | [**PaymentMethodTypeEnum**](#PaymentMethodTypeEnum) |  |  [optional] |
|**paymentProcessorType** | [**PaymentProcessorTypeEnum**](#PaymentProcessorTypeEnum) |  |  [optional] |



## Enum: PaymentMethodTypeEnum

| Name | Value |
|---- | -----|
| CARD | &quot;CARD&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



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

