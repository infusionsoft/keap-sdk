

# SubscriptionPlan


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** | If the subscription plan is active or not. |  [optional] |
|**allowProrating** | **Boolean** | Whether or not the plan will allow prorating. |  [optional] |
|**cycleType** | [**CycleTypeEnum**](#CycleTypeEnum) | The cycle type of the subscription plan. Possible values: YEARLY, MONTHLY, WEEKLY, DAILY |  [optional] |
|**displayOrderIndex** | **Integer** | The order index where this plan will be displayed on a page against other plans. Smaller number indicates plan will be displayed higher in the list. |  [optional] |
|**frequency** | **Integer** | Total number of times of a cycle type which constitutes a plan cycle. Minimum value is 1. |  [optional] |
|**id** | **String** | Id of the subscription plan. |  [optional] |
|**planPrice** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**productId** | **String** |  |  [optional] |
|**totalCycles** | **Integer** | Total number of cycles the plan will run before ending. Value of 0 indicates plan will never end. |  [optional] |



## Enum: CycleTypeEnum

| Name | Value |
|---- | -----|
| DAILY | &quot;DAILY&quot; |
| WEEKLY | &quot;WEEKLY&quot; |
| MONTHLY | &quot;MONTHLY&quot; |
| YEARLY | &quot;YEARLY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

