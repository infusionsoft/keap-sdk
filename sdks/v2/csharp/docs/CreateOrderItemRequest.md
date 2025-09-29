# Keap.Core.V2.Model.CreateOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CostPerUnit** | **double** | The cost per unit. Must be greater than or equal to 0. If not specified, the product cost will be used. | [optional] 
**Description** | **string** | The description of the order item. Must not be whitespace. | [optional] 
**ItemType** | **string** | The type of this order item. For now only [PRODUCT] is supported. Will default to [PRODUCT] if omitted. | [optional] 
**Name** | **string** | The name of the order item. Must not be whitespace. If not specified, the product name will be used. | [optional] 
**Notes** | **string** | The notes for the order item. Must not be whitespace. | [optional] 
**PricePerUnit** | **double** | The price per unit. Must be greater than or equal to 0. If not specified, the product price will be used. | [optional] 
**ProductId** | **string** | The id of the product to be added to the order. Must be a valid product id. | 
**Quantity** | **int** | The quantity. Must be greater than or equal to 1. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

