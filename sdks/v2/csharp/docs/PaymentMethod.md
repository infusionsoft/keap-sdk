# Keap.Core.V2.Model.PaymentMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContactId** | **string** | The id of the contact the payment method is associated with. | [optional] 
**PaymentMethodId** | **string** | The unique identifier of the payment method. | [optional] 
**CreditCardId** | **string** | For backward-compatibility with v1 endpoints. If present, it&#39;s the credit card id this payment method refers to. | [optional] 
**MerchantAccountType** | **string** | The merchant account type through which the payment method was tokenized. | [optional] 
**MerchantAccountId** | **string** | The merchant account id through which the payment method was tokenize. | [optional] 
**PaymentMethodType** | **string** | The type of payment method. For now, only CARD is supported. | [optional] 
**CreatedTime** | **DateTime** | When this payment method was made. In ISO-8601 format. | [optional] 
**CardInfo** | [**CardInfo**](CardInfo.md) | If present, it provides additional details for payment methods of payment_method_type CARD. | [optional] 
**Status** | **string** | Status of the payment method. Fow now, only EXPIRED is supported. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

