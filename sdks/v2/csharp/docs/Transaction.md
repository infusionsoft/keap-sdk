# Keap.Core.V2.Model.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContactId** | **string** | Reference to the contact the transaction was for. | [optional] 
**Id** | **string** | The unique identifier of the transaction. | [optional] 
**IsLive** | **bool** | true if this is a live transaction, false if the transaction is a test or sandbox transaction. | [optional] 
**IsSuccessful** | **bool** | true if the transaction resulted in a success, false if the transaction resulted in a failure or error. | [optional] 
**OrderId** | **string** | Reference to the order this transaction was for | [optional] 
**PaymentGatewayId** | **string** | Reference to the payment processor to where the transaction attempt was made. | [optional] 
**PaymentId** | **string** | Reference to the payment record that on successful transactions. No reference if the transaction failed. | [optional] 
**PaymentProcessorType** | **string** |  | [optional] 
**TransactionAmount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**TransactionTime** | **string** | ISO date-time of the transaction. e.g 2024-04-28 11:25:44 | [optional] 
**TransactionType** | **string** | The type of transaction. Possible values: CAPTURE, VOID, REFUND, CREDIT, APPROVAL | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

