

# RestApplyCommissionRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**commissionAmount** | **Double** |  |  [optional] |
|**commissionDate** | **String** |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**payPercent** | **Double** |  |  [optional] |
|**payoutType** | [**PayoutTypeEnum**](#PayoutTypeEnum) | The payout type |  |
|**referralPartnerId** | **String** | The referral partner id |  |



## Enum: PayoutTypeEnum

| Name | Value |
|---- | -----|
| UPFRONT | &quot;UPFRONT&quot; |
| PAYMENT_RECEIVED | &quot;PAYMENT_RECEIVED&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

