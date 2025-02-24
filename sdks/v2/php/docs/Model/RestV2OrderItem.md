# # RestV2OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_cycle** | **int** |  | [optional]
**cost** | **float** |  | [optional]
**cycle** | **string** | The interval at which the customer is charged for the subscription. | [optional]
**description** | **string** |  | [optional]
**discount** | **float** |  | [optional]
**frequency** | **int** | Interval at which a customer receives a product or service as part of a subscription plan. | [optional]
**id** | **string** |  | [optional]
**name** | **string** |  | [optional]
**notes** | **string** |  | [optional]
**number_of_payments** | **int** |  | [optional]
**order_item_taxes** | [**\Keap\Core\V2\Model\OrderItemTax[]**](OrderItemTax.md) |  | [optional]
**price** | **float** |  | [optional]
**product** | [**\Keap\Core\V2\Model\OrderItemProduct**](OrderItemProduct.md) |  | [optional]
**quantity** | **int** |  | [optional]
**special** | [**\Keap\Core\V2\Model\Discount**](Discount.md) |  | [optional]
**subscription** | [**\Keap\Core\V2\Model\RestV2Subscription**](RestV2Subscription.md) |  | [optional]
**subscription_based** | **bool** |  | [optional]
**subscription_id** | **string** |  | [optional]
**subscription_plan** | [**\Keap\Core\V2\Model\RestSubscriptionPlan**](RestSubscriptionPlan.md) |  | [optional]
**type** | **string** |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
