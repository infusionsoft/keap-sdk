# Keap.Core.V2.Model.CreateRestOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **string** |  | [optional] 
**ItemType** | **string** | The type of this line item. For now only [PRODUCT] is supported. Will default to [PRODUCT] if omitted. | [optional] 
**Price** | **double** | Overridable price of the product. If not specified, the default will be used. Must be greater than or equal to 0. | [optional] 
**ProductId** | **string** | The id of the product to be added to the order. | 
**Quantity** | **int** | Quantity must be greater than or equal to 1 | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

