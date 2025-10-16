

# PaymentMethod


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**cardInfo** | [**CardInfo**](CardInfo.md) |  |  [optional] |
|**contactId** | **String** |  |  [optional] |
|**createdTime** | **String** |  |  [optional] |
|**merchantAccountId** | **String** |  |  [optional] |
|**merchantAccountType** | [**MerchantAccountTypeEnum**](#MerchantAccountTypeEnum) | The merchant type this payment method was authorized with. Valid values are: PAYPAL, AUTHORIZE, EWAY, WEPAY, STRIPE, KEAP_PAY, UNSUPPORTED |  [optional] |
|**paymentMethodId** | **String** |  |  [optional] |
|**paymentMethodType** | [**PaymentMethodTypeEnum**](#PaymentMethodTypeEnum) | The type of payment method. For now, only CARD is supported. |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | Status of the payment method. Fow now, only EXPIRED is supported. |  [optional] |



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



## Enum: PaymentMethodTypeEnum

| Name | Value |
|---- | -----|
| CARD | &quot;CARD&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| EXPIRED | &quot;EXPIRED&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

