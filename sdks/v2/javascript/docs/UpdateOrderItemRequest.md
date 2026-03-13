# KeapCoreServiceV2Sdk.UpdateOrderItemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the order item. Must not be whitespace. | [optional] 
**description** | **String** | The description of the order item. Must not be whitespace. | [optional] 
**quantity** | **Number** | The quantity. Must be greater than or equal to 1. | [optional] 
**notes** | **String** | The notes for the order item. Must not be whitespace. | [optional] 
**productId** | **String** | The id of the product. Must be a valid product id. Used only for item_type PRODUCT or SUBSCRIPTION. | [optional] 
**subscriptionPlanId** | **String** | The id of the subscription plan. Must be a valid subscription plan id. Used only for item_type SUBSCRIPTION. | [optional] 
**subscriptionPlanDescription** | **String** | A short description of the subscription&#39;s schedule. Used only for item_type SUBSCRIPTION. Must not be whitespace. | [optional] 
**pricePerUnit** | **Number** | The price per unit. | [optional] 
**costPerUnit** | **Number** | The cost per unit. Used for item_type PRODUCT or SUBSCRIPTION. | [optional] 


