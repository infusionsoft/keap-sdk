

# SubscriptionPlanList


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The subscription plan id |  [optional] |
|**active** | **Boolean** | If the subscription plan should be active/available for purchase |  [optional] |
|**prorate** | **Boolean** | If the subscription plan should allow prorating |  [optional] |
|**billingCycle** | [**BillingCycleEnum**](#BillingCycleEnum) | How frequent to bill. |  [optional] |
|**billingFrequency** | **Integer** | How many times per billing cycle to bill |  [optional] |
|**numberOfCycles** | **Integer** | How many billing cycles to bill. Optional field i.e. can be no value or 0. |  [optional] |
|**planPrice** | [**CurrencyValueList**](CurrencyValueList.md) | The price of the subscription plan |  [optional] |
|**orderIndex** | **Integer** | Determines the order in which the plan will be displayed |  [optional] |



## Enum: BillingCycleEnum

| Name | Value |
|---- | -----|
| DAILY | &quot;DAILY&quot; |
| WEEKLY | &quot;WEEKLY&quot; |
| MONTHLY | &quot;MONTHLY&quot; |
| YEARLY | &quot;YEARLY&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

