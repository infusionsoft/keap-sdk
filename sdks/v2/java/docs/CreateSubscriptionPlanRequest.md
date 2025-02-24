

# CreateSubscriptionPlanRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** | Whether the subscription plan is active. |  [optional] |
|**allowProrating** | **Boolean** | Allow prorating of the subscription plan. |  [optional] |
|**cycleType** | [**CycleTypeEnum**](#CycleTypeEnum) | The cycle type of the subscription plan. |  |
|**displayOrderIndex** | **Integer** | The order that this plan will be displayed to the user. |  [optional] |
|**frequency** | **Integer** | The frequency of the subscription plan. |  [optional] |
|**planPrice** | **Double** | The price of the subscription plan in the smallest currency unit. |  |
|**totalCycles** | **Integer** | How many cycles the subscription plan will have.  0 means infinite. |  [optional] |



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

