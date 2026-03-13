

# UpdateProductOptionRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**required** | **Boolean** | Whether this option is required for product purchase. |  [optional] |
|**optionLabel** | **String** | The displayable name of the option (e.g. Size). Cannot be whitespace only. |  [optional] |
|**displayOrder** | **Integer** | The order in which this option will be displayed among other options. Minimum is 0. Lower values indicate higher priority in order. |  [optional] |
|**minimumCharacters** | **Integer** | Used only for option_type of &#x60;TEXT&#x60;. Minimum allowable characters. Minimum is 0. |  [optional] |
|**maximumCharacters** | **Integer** | Used only for option_type of &#x60;TEXT&#x60;. Maximum allowable characters. Minimum is 0. |  [optional] |
|**allowSpaces** | **Boolean** | Used only for option_type of &#x60;TEXT&#x60;. Whether or not to allow whitespace in the text. |  [optional] |
|**onlyStartsWith** | [**OnlyStartsWithEnum**](#OnlyStartsWithEnum) | Used only for option_type of &#x60;TEXT&#x60;.  Restricts the text to start with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. |  [optional] |
|**onlyEndsWith** | [**OnlyEndsWithEnum**](#OnlyEndsWithEnum) | Used only for option_type of &#x60;TEXT&#x60;. Restricts the text to end with certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. |  [optional] |
|**onlyContains** | [**OnlyContainsEnum**](#OnlyContainsEnum) | Used only for option_type of &#x60;TEXT&#x60;. Restricts the text to contain certain character types. Valid values are NONE, LETTER, DIGIT, BOTH. |  [optional] |
|**errorMessage** | **String** | Used only for option_type of &#x60;TEXT&#x60;. An error message to display if any rules are broken. Cannot be whitespace only. |  [optional] |



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

