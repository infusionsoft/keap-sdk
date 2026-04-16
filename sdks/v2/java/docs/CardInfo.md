

# CardInfo


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**brand** | **String** |  |  [optional] |
|**fingerprint** | **String** | A token that uniquely identifies the card info |  [optional] |
|**cardType** | [**CardTypeEnum**](#CardTypeEnum) | The card type. Valid values are: CREDIT, DEBIT, PREPAID. |  [optional] |
|**lastFour** | **String** |  |  [optional] |
|**expirationYear** | **String** | Four-digit expiration year |  [optional] |
|**expirationMonth** | **String** | Two-digit expiration month |  [optional] |



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

