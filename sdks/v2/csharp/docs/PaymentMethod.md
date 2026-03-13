# Keap.Core.V2.Model.PaymentMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContactId** | **string** |  | [optional] 
**PaymentMethodId** | **string** |  | [optional] 
**MerchantAccountType** | **string** | The merchant type this payment method was authorized with. Valid values are: PAYPAL, AUTHORIZE, EWAY, WEPAY, STRIPE, KEAP_PAY, UNSUPPORTED | [optional] 
**MerchantAccountId** | **string** |  | [optional] 
**PaymentMethodType** | **string** | The type of payment method. For now, only CARD is supported. | [optional] 
**CreatedTime** | **string** |  | [optional] 
**CardInfo** | [**CardInfo**](CardInfo.md) | Additional info for payment methods of payment_method_type CARD. | [optional] 
**Status** | **string** | Status of the payment method. Fow now, only EXPIRED is supported. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

