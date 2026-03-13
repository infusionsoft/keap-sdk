

# RestAffiliatePayment


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Payment ID |  [optional] |
|**payDate** | **String** | Payment date (ISO-8601) |  [optional] |
|**payNotes** | **String** | Payment notes |  [optional] |
|**payAmount** | **Double** | Payment amount |  [optional] |
|**payType** | [**PayTypeEnum**](#PayTypeEnum) | Payment type |  [optional] |
|**createTime** | **String** | Record creation time (ISO-8601) |  [optional] |



## Enum: PayTypeEnum

| Name | Value |
|---- | -----|
| CASH | &quot;CASH&quot; |
| CHECK | &quot;CHECK&quot; |
| CREDIT_CARD | &quot;CREDIT_CARD&quot; |
| CREDIT_CARD_MANUAL | &quot;CREDIT_CARD_MANUAL&quot; |
| MONEY_ORDER | &quot;MONEY_ORDER&quot; |
| ADJUSTMENT | &quot;ADJUSTMENT&quot; |
| CREDIT | &quot;CREDIT&quot; |
| REFUND | &quot;REFUND&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

