# Keap.Core.V2.Model.OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CostPerUnit** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**Description** | **string** |  | [optional] 
**Discount** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**Id** | **string** |  | [optional] 
**ItemType** | **string** | The order item type. Valid values are: PRODUCT, SHIPPING, TAX, SERVICE, PRODUCT, UPSELL, FINANCE_CHARGE, DISCOUNT, PROGRAM, SUBSCRIPTION, DISCOUNT_FREE_TRIAL, DISCOUNT_ORDER_TOTAL, DISCOUNT_PRODUCT, DISCOUNT_PRODUCT_CATEGORY, DISCOUNT_SHIPPING, TIP, OTHER. | [optional] 
**Name** | **string** |  | [optional] 
**Notes** | **string** |  | [optional] 
**PricePerUnit** | [**CurrencyValue**](CurrencyValue.md) |  | [optional] 
**Product** | [**OrderItemProduct**](OrderItemProduct.md) |  | [optional] 
**Quantity** | **int** |  | [optional] 
**Special** | [**Discount**](Discount.md) |  | [optional] 
**SubscriptionId** | **string** | If the order item is a subscription type, this refers to the subscription id that generated the order. | [optional] 
**SubscriptionPlan** | [**SubscriptionPlan**](SubscriptionPlan.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

