

# SubscriptionPlan


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Subscription plan ID |  [optional] |
|**frequency** | **Integer** | Interval at which a customer receives a product or service as part of a subscription plan. |  [optional] |
|**active** | **Boolean** | If the subscription plan is active or not. |  [optional] |
|**subscriptionPlanName** | **String** | Plan name |  [optional] |
|**cycleType** | [**CycleTypeEnum**](#CycleTypeEnum) | The cycle type of the subscription plan. |  [optional] |
|**totalCycles** | **Integer** | Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end. |  [optional] |
|**planPrice** | [**CurrencyValue**](CurrencyValue.md) | Price of the plan |  [optional] |
|**displayOrderIndex** | **Integer** | The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list. |  [optional] |



## Enum: CycleTypeEnum

| Name | Value |
|---- | -----|
| YEARLY | &quot;YEARLY&quot; |
| MONTHLY | &quot;MONTHLY&quot; |
| WEEKLY | &quot;WEEKLY&quot; |
| DAILY | &quot;DAILY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

