

# DiscountCriteria


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) | Type of criteria: DATE_RANGE, PROMO_CODE, PRODUCT, SUBSCRIPTION_PLAN, or ORDER_TOTAL |  [optional] |
|**code** | **String** | Promotional code for PROMO_CODE criteria |  [optional] |
|**criteriaId** | **String** | Unique identifier for this criteria |  [optional] |
|**rangeStartTime** | **ZonedDateTime** | Start date/time for DATE_RANGE criteria (ISO-8601 format) |  [optional] |
|**rangeEndTime** | **ZonedDateTime** | End date/time for DATE_RANGE criteria (ISO-8601 format) |  [optional] |
|**productId** | **String** | Product ID for PRODUCT criteria |  [optional] |
|**productQuantityMin** | **Integer** | Minimum product quantity for PRODUCT criteria |  [optional] |
|**productQuantityMax** | **Integer** | Maximum product quantity for PRODUCT criteria |  [optional] |
|**planId** | **String** | Subscription plan ID for SUBSCRIPTION_PLAN criteria |  [optional] |
|**subscriptionQuantity** | **Integer** | Subscription quantity for SUBSCRIPTION_PLAN criteria |  [optional] |
|**totalAmount** | **Double** | Total amount threshold for ORDER_TOTAL criteria |  [optional] |
|**operator** | [**OperatorEnum**](#OperatorEnum) | Comparison operator for ORDER_TOTAL criteria: LESS_THAN or GREATER_THAN |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| DATE_RANGE | &quot;DATE_RANGE&quot; |
| PROMO_CODE | &quot;PROMO_CODE&quot; |
| PRODUCT | &quot;PRODUCT&quot; |
| SUBSCRIPTION_PLAN | &quot;SUBSCRIPTION_PLAN&quot; |
| ORDER_TOTAL | &quot;ORDER_TOTAL&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: OperatorEnum

| Name | Value |
|---- | -----|
| LESS_THAN | &quot;LESS_THAN&quot; |
| GREATER_THAN | &quot;GREATER_THAN&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

