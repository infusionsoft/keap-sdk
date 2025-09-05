# Keap.Core.V2.Model.CreatePaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplyToCommissions** | **bool** | Whether to apply this payment to commissions. | [optional] 
**Notes** | **string** | The notes for this payment. | [optional] 
**PaymentAmount** | **double** | The amount to pay. Must not exceed the current balance of the order. Must be greater than 0 if charging with a payment_method_id | [optional] 
**PaymentMethodId** | **string** | The payment method id to charge immediately against this order. Omit if you want to add a payment record instead. | [optional] 
**PaymentMethodType** | **string** | The manual payment method type for manually recording a payment. Value must match against the list of types defined under your application&#39;s Order Settings. Ignored if payment_method_id is provided. | [optional] 
**PaymentTime** | **string** | The date and time of payment. In ISO-8601 format (e.g. 2024-05-21T23:00:00Z) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

