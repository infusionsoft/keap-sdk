

# UpdateProgramResourceRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**title** | **String** | The program resource title |  [optional] |
|**notes** | **String** | The resource notes. |  [optional] |
|**url** | **String** | The URL to the resource. |  [optional] |
|**order** | **Integer** | The order in which the resource is displayed. Minimum value is 0. Lower values indicate higher priority. |  [optional] |
|**contentHtml** | **String** | The contents of the PAGE or EMAIL. In HTML format. |  [optional] |
|**pageWidth** | **Integer** | The width of the page for PAGE types, in pixels. Minimum value is 0. |  [optional] |
|**pageHeight** | **Integer** | The height of the page for PAGE types, in pixels. Minimum value is 0. |  [optional] |
|**commissionProgramIds** | **List&lt;String&gt;** | A list of commission program ids to use this resource. The values in this list will replace the existing list of commission program ids. |  [optional] |


## Implemented Interfaces

* Serializable

