

# CardInfo


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**brand** | **String** |  |  [optional] |
|**cardType** | [**CardTypeEnum**](#CardTypeEnum) | The card type. Valid values are: CREDIT, DEBIT, PREPAID. |  [optional] |
|**expirationMonth** | **String** |  |  [optional] |
|**expirationYear** | **String** |  |  [optional] |
|**lastFour** | **String** |  |  [optional] |



## Enum: CardTypeEnum

| Name | Value |
|---- | -----|
| CREDIT | &quot;CREDIT&quot; |
| DEBIT | &quot;DEBIT&quot; |
| PREPAID | &quot;PREPAID&quot; |
| ACH | &quot;ACH&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

