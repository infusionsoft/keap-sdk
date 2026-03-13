

# CategoryDiscountCriteriaRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**type** | [**TypeEnum**](#TypeEnum) | Type of criteria: DATE_RANGE or PROMO_CODE |  [optional] |
|**code** | **String** | Promotional code for PROMO_CODE criteria |  [optional] |
|**rangeStartTime** | **ZonedDateTime** | Start date/time for DATE_RANGE criteria (ISO-8601 format) |  [optional] |
|**rangeEndTime** | **ZonedDateTime** | End date/time for DATE_RANGE criteria (ISO-8601 format) |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| DATE_RANGE | &quot;DATE_RANGE&quot; |
| PROMO_CODE | &quot;PROMO_CODE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

