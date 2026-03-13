

# CreateProductOptionTextOption


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**minimumCharacters** | **Integer** | Minimum allowable characters. Minimum is 0. |  [optional] |
|**maximumCharacters** | **Integer** | Maximum allowable characters. Minimum is 0. |  [optional] |
|**allowSpaces** | **Boolean** | Whether or not to allow whitespace in the text. |  [optional] |
|**onlyStartsWith** | [**OnlyStartsWithEnum**](#OnlyStartsWithEnum) | Restricts the text to start with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. |  [optional] |
|**onlyEndsWith** | [**OnlyEndsWithEnum**](#OnlyEndsWithEnum) | Restricts the text to end with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. |  [optional] |
|**onlyContains** | [**OnlyContainsEnum**](#OnlyContainsEnum) | Restricts the text to contain certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. |  [optional] |
|**errorMessage** | **String** | An error message to display if any rules are broken. Cannot be whitespace only. |  [optional] |



## Enum: OnlyStartsWithEnum

| Name | Value |
|---- | -----|
| NONE | &quot;NONE&quot; |
| LETTER | &quot;LETTER&quot; |
| DIGIT | &quot;DIGIT&quot; |
| BOTH | &quot;BOTH&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: OnlyEndsWithEnum

| Name | Value |
|---- | -----|
| NONE | &quot;NONE&quot; |
| LETTER | &quot;LETTER&quot; |
| DIGIT | &quot;DIGIT&quot; |
| BOTH | &quot;BOTH&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: OnlyContainsEnum

| Name | Value |
|---- | -----|
| NONE | &quot;NONE&quot; |
| LETTER | &quot;LETTER&quot; |
| DIGIT | &quot;DIGIT&quot; |
| BOTH | &quot;BOTH&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

