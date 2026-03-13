# Keap.Core.V2.Model.UpdateOrderItemRequest
order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the order item. Must not be whitespace. | [optional] 
**Description** | **string** | The description of the order item. Must not be whitespace. | [optional] 
**Quantity** | **int** | The quantity. Must be greater than or equal to 1. | [optional] 
**Notes** | **string** | The notes for the order item. Must not be whitespace. | [optional] 
**ProductId** | **string** | The id of the product. Must be a valid product id. Used only for item_type PRODUCT or SUBSCRIPTION. | [optional] 
**SubscriptionPlanId** | **string** | The id of the subscription plan. Must be a valid subscription plan id. Used only for item_type SUBSCRIPTION. | [optional] 
**SubscriptionPlanDescription** | **string** | A short description of the subscription&#39;s schedule. Used only for item_type SUBSCRIPTION. Must not be whitespace. | [optional] 
**PricePerUnit** | **double** | The price per unit. | [optional] 
**CostPerUnit** | **double** | The cost per unit. Used for item_type PRODUCT or SUBSCRIPTION. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

