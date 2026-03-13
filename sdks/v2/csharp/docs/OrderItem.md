# Keap.Core.V2.Model.OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the order item | [optional] 
**Name** | **string** | Name of the item | [optional] 
**Description** | **string** | Item description | [optional] 
**Notes** | **string** | Additional notes | [optional] 
**Quantity** | **int** | Quantity ordered | [optional] 
**Discount** | [**CurrencyValue**](CurrencyValue.md) | If the order item is a discount type, this is the amount of the discount. | [optional] 
**Special** | [**Discount**](Discount.md) | If the line item is a discount type, the details about the discount. | [optional] 
**Product** | [**OrderItemProduct**](OrderItemProduct.md) | Product details | [optional] 
**SubscriptionId** | **string** | If the order item is a subscription type, this refers to the subscription id that generated the order. | [optional] 
**ItemType** | **string** | The type of order item. | [optional] 
**CostPerUnit** | [**CurrencyValue**](CurrencyValue.md) | Cost per unit | [optional] 
**PricePerUnit** | [**CurrencyValue**](CurrencyValue.md) | Price per unit charged to customer | [optional] 
**SubscriptionPlan** | [**SubscriptionPlan**](SubscriptionPlan.md) | If the order item is a subscription type, the details of the subscription plan. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

