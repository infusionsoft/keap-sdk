# KeapCoreServiceV2Sdk.PaymentMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactId** | **String** |  | [optional] 
**paymentMethodId** | **String** |  | [optional] 
**creditCardId** | **String** |  | [optional] 
**merchantAccountType** | **String** | The merchant type this payment method was authorized with. Valid values are: PAYPAL, AUTHORIZE, EWAY, WEPAY, STRIPE, KEAP_PAY, UNSUPPORTED | [optional] 
**merchantAccountId** | **String** |  | [optional] 
**paymentMethodType** | **String** | The type of payment method. For now, only CARD is supported. | [optional] 
**createdTime** | **String** |  | [optional] 
**cardInfo** | [**CardInfo**](CardInfo.md) | Additional info for payment methods of payment_method_type CARD. | [optional] 
**status** | **String** | Status of the payment method. Fow now, only EXPIRED is supported. | [optional] 



## Enum: MerchantAccountTypeEnum


* `PAYPAL` (value: `"PAYPAL"`)

* `UNSUPPORTED` (value: `"UNSUPPORTED"`)

* `AUTHORIZE` (value: `"AUTHORIZE"`)

* `EWAY` (value: `"EWAY"`)

* `WEPAY` (value: `"WEPAY"`)

* `STRIPE` (value: `"STRIPE"`)

* `KEAP_PAY` (value: `"KEAP_PAY"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: PaymentMethodTypeEnum


* `CARD` (value: `"CARD"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)





## Enum: StatusEnum


* `EXPIRED` (value: `"EXPIRED"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




