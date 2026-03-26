# Keap.Core.V2.Model.CreateOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the order item. Must not be whitespace. If not specified, the product name will be used. | [optional] 
**Description** | **string** | The description of the order item. Must not be whitespace. | [optional] 
**Quantity** | **int** | The quantity. Must be greater than or equal to 1. | 
**Notes** | **string** | The notes for the order item. Must not be whitespace. | [optional] 
**ProductId** | **string** | The id of the product to be added to the order. Must be a valid product id. Required for item_type PRODUCT or SUBSCRIPTION. | [optional] 
**SubscriptionPlanId** | **string** | The id of the subscription plan to be added to the order. Must be a valid subscription plan id. Required only when the item_type is SUBSCRIPTION. | [optional] 
**SubscriptionPlanDescription** | **string** | A short description of the subscription&#39;s schedule. Used only for item_type SUBSCRIPTION. Must not be whitespace. | [optional] 
**ItemType** | **string** | The type of this order item. Will default to [PRODUCT] if omitted. | [optional] [default to ItemTypeEnum.PRODUCT]
**PricePerUnit** | **double** | The price per unit. For item_type PRODUCT or SUBSCRIPTION, if not specified, the product price will be used. | [optional] 
**CostPerUnit** | **double** | The cost per unit. Used only for item_type PRODUCT or SUBSCRIPTION. If not specified, the product cost will be used. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

