

# RestV2OrderItem


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**billingCycle** | **Integer** |  |  [optional] |
|**cost** | **Double** |  |  [optional] |
|**cycle** | [**CycleEnum**](#CycleEnum) | The interval at which the customer is charged for the subscription. |  [optional] |
|**description** | **String** |  |  [optional] |
|**discount** | **Double** |  |  [optional] |
|**frequency** | **Integer** | Interval at which a customer receives a product or service as part of a subscription plan. |  [optional] |
|**id** | **String** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**notes** | **String** |  |  [optional] |
|**numberOfPayments** | **Integer** |  |  [optional] |
|**orderItemTaxes** | [**List&lt;OrderItemTax&gt;**](OrderItemTax.md) |  |  [optional] |
|**price** | **Double** |  |  [optional] |
|**product** | [**OrderItemProduct**](OrderItemProduct.md) |  |  [optional] |
|**quantity** | **Integer** |  |  [optional] |
|**special** | [**Discount**](Discount.md) |  |  [optional] |
|**subscription** | [**RestV2Subscription**](RestV2Subscription.md) |  |  [optional] |
|**subscriptionBased** | **Boolean** |  |  [optional] |
|**subscriptionId** | **String** |  |  [optional] |
|**subscriptionPlan** | [**RestSubscriptionPlan**](RestSubscriptionPlan.md) |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  [optional] |



## Enum: CycleEnum

| Name | Value |
|---- | -----|
| DAILY | &quot;DAILY&quot; |
| WEEKLY | &quot;WEEKLY&quot; |
| MONTHLY | &quot;MONTHLY&quot; |
| YEARLY | &quot;YEARLY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| UNKNOWN | &quot;UNKNOWN&quot; |
| SHIPPING | &quot;SHIPPING&quot; |
| TAX | &quot;TAX&quot; |
| SERVICE | &quot;SERVICE&quot; |
| PRODUCT | &quot;PRODUCT&quot; |
| UPSELL | &quot;UPSELL&quot; |
| FINANCE_CHARGE | &quot;FINANCE_CHARGE&quot; |
| SPECIAL | &quot;SPECIAL&quot; |
| PROGRAM | &quot;PROGRAM&quot; |
| SUBSCRIPTION | &quot;SUBSCRIPTION&quot; |
| SPECIAL_FREE_TRIAL_DAYS | &quot;SPECIAL_FREE_TRIAL_DAYS&quot; |
| SPECIAL_ORDER_TOTAL | &quot;SPECIAL_ORDER_TOTAL&quot; |
| SPECIAL_PRODUCT | &quot;SPECIAL_PRODUCT&quot; |
| SPECIAL_CATEGORY | &quot;SPECIAL_CATEGORY&quot; |
| SPECIAL_SHIPPING | &quot;SPECIAL_SHIPPING&quot; |
| TIP | &quot;TIP&quot; |
| OTHER | &quot;OTHER&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

