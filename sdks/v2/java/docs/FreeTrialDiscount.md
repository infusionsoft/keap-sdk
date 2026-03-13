

# FreeTrialDiscount


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier for this free trial discount |  [optional] |
|**name** | **String** | Name of the discount |  [optional] |
|**description** | **String** | Description of the discount |  [optional] |
|**criteria** | [**List&lt;DiscountCriteria&gt;**](DiscountCriteria.md) | List of criteria that must be met for this discount to apply |  [optional] |
|**hidePrice** | **Boolean** | Whether to hide the price during the trial period |  [optional] |
|**subscriptionPlanId** | **String** | ID of the subscription plan this trial applies to |  [optional] |
|**freeTrialDays** | **Integer** | Number of days for the free trial period |  [optional] |


## Implemented Interfaces

* Serializable

