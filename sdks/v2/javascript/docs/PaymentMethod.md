# KeapCoreServiceV2Sdk.PaymentMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactId** | **String** | The id of the contact the payment method is associated with. | [optional] 
**paymentMethodId** | **String** | The unique identifier of the payment method. | [optional] 
**creditCardId** | **String** | For backward-compatibility with v1 endpoints. If present, it&#39;s the credit card id this payment method refers to. | [optional] 
**merchantAccountType** | **String** | The merchant account type through which the payment method was tokenized. | [optional] 
**merchantAccountId** | **String** | The merchant account id through which the payment method was tokenize. | [optional] 
**paymentMethodType** | **String** | The type of payment method. For now, only CARD is supported. | [optional] 
**createdTime** | **Date** | When this payment method was made. In ISO-8601 format. | [optional] 
**cardInfo** | [**CardInfo**](CardInfo.md) | If present, it provides additional details for payment methods of payment_method_type CARD. | [optional] 
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




