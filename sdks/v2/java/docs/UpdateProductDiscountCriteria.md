

# UpdateProductDiscountCriteria


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**code** | **String** | Promotional code for PROMO_CODE criteria |  [optional] |
|**criteriaId** | **String** | Unique identifier for this criteria |  |
|**rangeStartTime** | **ZonedDateTime** | Start date/time for DATE_RANGE criteria (ISO-8601 format) |  [optional] |
|**rangeEndTime** | **ZonedDateTime** | End date/time for DATE_RANGE criteria (ISO-8601 format) |  [optional] |
|**productId** | **String** | Product ID for PRODUCT criteria |  [optional] |
|**productQuantityMin** | **Integer** | Minimum product quantity for PRODUCT criteria |  [optional] |
|**productQuantityMax** | **Integer** | Maximum product quantity for PRODUCT criteria |  [optional] |
|**planId** | **String** | Subscription plan ID for SUBSCRIPTION_PLAN criteria |  [optional] |
|**subscriptionQuantity** | **Integer** | Subscription quantity for SUBSCRIPTION_PLAN criteria |  [optional] |
|**totalAmount** | **Double** | Total amount threshold for ORDER_TOTAL criteria |  [optional] |
|**operator** | [**OperatorEnum**](#OperatorEnum) | Comparison operator for ORDER_TOTAL criteria: LESS_THAN or GREATER_THAN |  [optional] |



## Enum: OperatorEnum

| Name | Value |
|---- | -----|
| LESS_THAN | &quot;LESS_THAN&quot; |
| GREATER_THAN | &quot;GREATER_THAN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

