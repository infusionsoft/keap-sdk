

# OrderItemProduct


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**createdTime** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**lastUpdatedTime** | **String** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**productOptions** | [**List&lt;RestProductOption&gt;**](RestProductOption.md) |  |  [optional] |
|**productPrice** | **Double** |  |  [optional] |
|**productShortDescription** | **String** |  |  [optional] |
|**shippable** | **Boolean** |  |  [optional] |
|**sku** | **String** |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**subscriptionOnly** | **Boolean** |  |  [optional] |
|**subscriptionPlans** | [**List&lt;RestSubscriptionPlan&gt;**](RestSubscriptionPlan.md) |  |  [optional] |
|**taxable** | **Boolean** |  |  [optional] |
|**url** | **String** | The url is the permalink to the resource |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| INACTIVE | &quot;INACTIVE&quot; |
| ACTIVE | &quot;ACTIVE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

