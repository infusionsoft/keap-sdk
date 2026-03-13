

# ApplyCommissionRequest

RestApplyCommissionRequest

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**affiliateId** | **String** | The affiliate id |  |
|**payPercent** | **Double** | Commission percentage |  [optional] |
|**commissionAmount** | **Double** | Fixed commission amount |  [optional] |
|**payoutType** | [**PayoutTypeEnum**](#PayoutTypeEnum) | The payout type |  |
|**description** | **String** | Commission description |  [optional] |
|**commissionDate** | **LocalDate** | Date of the commission |  [optional] |



## Enum: PayoutTypeEnum

| Name | Value |
|---- | -----|
| UPFRONT | &quot;UPFRONT&quot; |
| PAYMENT_RECEIVED | &quot;PAYMENT_RECEIVED&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

