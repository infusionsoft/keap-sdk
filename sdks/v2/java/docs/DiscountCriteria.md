

# DiscountCriteria


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**code** | **String** |  |  [optional] |
|**criteriaId** | **String** |  |  [optional] |
|**operator** | [**OperatorEnum**](#OperatorEnum) |  |  [optional] |
|**planId** | **String** |  |  [optional] |
|**productId** | **String** |  |  [optional] |
|**productQuantityMax** | **Integer** |  |  [optional] |
|**productQuantityMin** | **Integer** |  |  [optional] |
|**rangeEndTime** | **String** |  |  [optional] |
|**rangeStartTime** | **String** |  |  [optional] |
|**subscriptionQuantity** | **Integer** |  |  [optional] |
|**totalAmount** | **Double** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  [optional] |



## Enum: OperatorEnum

| Name | Value |
|---- | -----|
| LESS_THAN | &quot;LESS_THAN&quot; |
| GREATER_THAN | &quot;GREATER_THAN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| DATE_RANGE | &quot;DATE_RANGE&quot; |
| PROMO_CODE | &quot;PROMO_CODE&quot; |
| PRODUCT | &quot;PRODUCT&quot; |
| SUBSCRIPTION_PLAN | &quot;SUBSCRIPTION_PLAN&quot; |
| ORDER_TOTAL | &quot;ORDER_TOTAL&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

