

# CreateProgramResourceRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**title** | **String** | The program resource title |  |
|**type** | [**TypeEnum**](#TypeEnum) | The type of resource |  |
|**notes** | **String** | The resource notes. |  [optional] |
|**url** | **String** | The URL to the resource. |  [optional] |
|**order** | **Integer** | The order in which the resource is displayed. Minimum value is 0. Defaults to 0. Lower values indicate higher priority. |  [optional] |
|**contentHtml** | **String** | The contents of the PAGE or EMAIL. In HTML format. |  [optional] |
|**pageWidth** | **Integer** | The width of the page for PAGE types, in pixels. Minimum value is 0. Defaults to 0 |  [optional] |
|**pageHeight** | **Integer** | The height of the page for PAGE types, in pixels. Minimum value is 0. Defaults to 0 |  [optional] |
|**commissionProgramIds** | **List&lt;String&gt;** | A list of commission program ids that will use this resource. |  |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| EMAIL | &quot;EMAIL&quot; |
| BANNER | &quot;BANNER&quot; |
| PAGE | &quot;PAGE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

