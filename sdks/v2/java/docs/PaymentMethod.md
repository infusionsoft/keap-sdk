

# PaymentMethod


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**contactId** | **String** | The id of the contact the payment method is associated with. |  [optional] |
|**paymentMethodId** | **String** | The unique identifier of the payment method. |  [optional] |
|**creditCardId** | **String** | For backward-compatibility with v1 endpoints. If present, it&#39;s the credit card id this payment method refers to. |  [optional] |
|**merchantAccountType** | [**MerchantAccountTypeEnum**](#MerchantAccountTypeEnum) | The merchant account type through which the payment method was tokenized. |  [optional] |
|**merchantAccountId** | **String** | The merchant account id through which the payment method was tokenize. |  [optional] |
|**paymentMethodType** | [**PaymentMethodTypeEnum**](#PaymentMethodTypeEnum) | The type of payment method. For now, only CARD is supported. |  [optional] |
|**createdTime** | **ZonedDateTime** | When this payment method was made. In ISO-8601 format. |  [optional] |
|**cardInfo** | [**CardInfo**](CardInfo.md) | If present, it provides additional details for payment methods of payment_method_type CARD. |  [optional] |
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

