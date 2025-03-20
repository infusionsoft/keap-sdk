

# RestSubscriptionPlan


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**active** | **Boolean** |  |  [optional] |
|**cycle** | [**CycleEnum**](#CycleEnum) | The interval at which the customer is charged for the subscription. |  [optional] |
|**frequency** | **Integer** | Interval at which a customer receives a product or service as part of a subscription plan. |  [optional] |
|**id** | **String** |  |  [optional] |
|**numberOfCycles** | **Integer** |  |  [optional] |
|**planPrice** | [**CurrencyValue**](CurrencyValue.md) |  |  [optional] |
|**subscriptionPlanIndex** | **Integer** | Subscription plan identifier. |  [optional] |
|**subscriptionPlanName** | **String** |  |  [optional] |



## Enum: CycleEnum

| Name | Value |
|---- | -----|
| DAILY | &quot;DAILY&quot; |
| WEEKLY | &quot;WEEKLY&quot; |
| MONTHLY | &quot;MONTHLY&quot; |
| YEARLY | &quot;YEARLY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

