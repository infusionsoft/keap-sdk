

# AffiliateProgramResource


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The program resource identifier |  [optional] |
|**title** | **String** | The program resource title |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) | The type of resource |  [optional] |
|**notes** | **String** | The resource notes. |  [optional] |
|**url** | **String** | The URL to the resource. |  [optional] |
|**order** | **Integer** | The order which the resource to be displayed. Minimum value is 0. Lower values indicate higher priority. |  [optional] |
|**contentHtml** | **String** | The contents of the PAGE or EMAIL. In HTML format. |  [optional] |
|**pageWidth** | **Integer** | The width of the page for PAGE types, in pixels. |  [optional] |
|**pageHeight** | **Integer** | The height of the page for PAGE types, in pixels. |  [optional] |
|**commissionPrograms** | [**List&lt;ResourceCommissionProgram&gt;**](ResourceCommissionProgram.md) | A list of commission programs using this resource. |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| EMAIL | &quot;EMAIL&quot; |
| BANNER | &quot;BANNER&quot; |
| PAGE | &quot;PAGE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

