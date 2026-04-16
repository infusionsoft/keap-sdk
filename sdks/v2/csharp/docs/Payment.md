# Keap.Core.V2.Model.Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique identifier of the payment. | [optional] 
**Type** | **string** | A label describing the type of payment made. | [optional] 
**Amount** | **double** | The payment amount. | [optional] 
**Note** | **string** | A note about the payment. | [optional] 
**Status** | **string** | Provides the current status of the payment, if available. | [optional] 
**Commissioned** | **bool** | Whether this payment had a commission. | [optional] 
**Synced** | **bool** | Whether or not the data is synced externally. | [optional] 
**PaymentTime** | **DateTime** | When this payment was made. In ISO-8601 format. | [optional] 
**RefundPaymentId** | **string** | If this payment had a refund, this refers to the id of the refund payment. | [optional] 
**ContactId** | **string** | The id of the contact the payment is associated with. | [optional] 
**OrderIds** | **List&lt;string&gt;** | List of order ids the payment was made was against. | [optional] 
**UpdateTime** | **DateTime** | When this payment was updated. In ISO-8601 format. | [optional] 
**ExternalTransactionId** | **string** | An external id - typically from a payment processor - that references this transaction. | [optional] 
**MerchantAccountId** | **string** | The merchant account id through which the transaction was made. | [optional] 
**MerchantAccountType** | **string** | The merchant account type through which the transaction was made. | [optional] 
**PaymentMethod** | [**PaymentMethod**](PaymentMethod.md) | Details of the payment method used for this transaction. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

