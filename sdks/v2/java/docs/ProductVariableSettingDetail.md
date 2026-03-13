

# ProductVariableSettingDetail


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**contains** | [**ContainsEnum**](#ContainsEnum) | Requires the value (excluding start and end) to contain given type. |  [optional] |
|**minChars** | **Integer** | Minimum allowable characters |  [optional] |
|**maxChars** | **Integer** | Max allowable chars. Its value must be greater than min_chars |  [optional] |
|**containSpaces** | **Boolean** | If spaces are allowed for the option |  [optional] |
|**startWith** | [**StartWithEnum**](#StartWithEnum) | Requires the value to start with the given type. |  [optional] |
|**endWith** | [**EndWithEnum**](#EndWithEnum) | Requires the value to end with the given type. |  [optional] |
|**validationMsg** | **String** | Customized validation message to display when option criteria aren&#39;t met |  [optional] |



## Enum: ContainsEnum

| Name | Value |
|---- | -----|
| LETTER | &quot;LETTER&quot; |
| NUMBER | &quot;NUMBER&quot; |
| BOTH | &quot;BOTH&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: StartWithEnum

| Name | Value |
|---- | -----|
| LETTER | &quot;LETTER&quot; |
| NUMBER | &quot;NUMBER&quot; |
| BOTH | &quot;BOTH&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |



## Enum: EndWithEnum

| Name | Value |
|---- | -----|
| LETTER | &quot;LETTER&quot; |
| NUMBER | &quot;NUMBER&quot; |
| BOTH | &quot;BOTH&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

