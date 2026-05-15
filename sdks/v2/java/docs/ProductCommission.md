

# ProductCommission


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**payoutType** | [**PayoutTypeEnum**](#PayoutTypeEnum) | The payout type for this commission. |  [optional] |
|**dollarAmount** | **Double** | Level 1 fixed dollar amount to be paid for commission. This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; |  [optional] |
|**percentage** | **Double** | Level 1 percentage to be paid for commission (0-100). This will be set for the Sale. This is deprecated for &#x60;level_1&#x60; |  [optional] |
|**unused** | [**CommissionItem**](CommissionItem.md) | Payout rules for any unused commissions. |  [optional] |
|**level1** | [**CommissionItem**](CommissionItem.md) | Payout rules for Level 1 recipients of the commission. |  [optional] |
|**level2** | [**CommissionItem**](CommissionItem.md) | Payout rules for Level 2 recipients of the commission. |  [optional] |
|**productId** | **String** | Product ID |  [optional] |
|**productName** | **String** | Product name |  [optional] |
|**productPrice** | **Double** | Product price |  [optional] |



## Enum: PayoutTypeEnum

| Name | Value |
|---- | -----|
| UPFRONT | &quot;UPFRONT&quot; |
| PAYMENT_RECEIVED | &quot;PAYMENT_RECEIVED&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

