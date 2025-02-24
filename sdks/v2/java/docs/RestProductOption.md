

# RestProductOption


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**allowSpaces** | **Boolean** |  |  [optional] |
|**canContainCharacter** | **Boolean** |  |  [optional] |
|**canContainNumber** | **Boolean** |  |  [optional] |
|**canEndWithCharacter** | **Boolean** |  |  [optional] |
|**canEndWithNumber** | **Boolean** |  |  [optional] |
|**canStartWithCharacter** | **Boolean** |  |  [optional] |
|**canStartWithNumber** | **Boolean** |  |  [optional] |
|**displayIndex** | **Integer** |  |  [optional] |
|**id** | **String** |  |  [optional] |
|**label** | **String** |  |  [optional] |
|**maxChars** | **Integer** |  |  [optional] |
|**minChars** | **Integer** |  |  [optional] |
|**name** | **String** |  |  [optional] |
|**required** | **Boolean** |  |  [optional] |
|**textMessage** | **String** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  [optional] |
|**values** | [**List&lt;RestProductOptionValue&gt;**](RestProductOptionValue.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| FIXED | &quot;FIXED&quot; |
| VARIABLE | &quot;VARIABLE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

