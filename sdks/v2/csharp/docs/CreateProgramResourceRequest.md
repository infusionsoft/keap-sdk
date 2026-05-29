# Keap.Core.V2.Model.CreateProgramResourceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** | The program resource title | 
**Type** | **string** | The type of resource | 
**Notes** | **string** | The resource notes. | [optional] 
**Url** | **string** | The URL to the resource. | [optional] 
**Order** | **int** | The order in which the resource is displayed. Minimum value is 0. Defaults to 0. Lower values indicate higher priority. | [optional] 
**ContentHtml** | **string** | The contents of the PAGE or EMAIL. In HTML format. | [optional] 
**PageWidth** | **int** | The width of the page for PAGE types, in pixels. Minimum value is 0. Defaults to 0 | [optional] 
**PageHeight** | **int** | The height of the page for PAGE types, in pixels. Minimum value is 0. Defaults to 0 | [optional] 
**CommissionProgramIds** | **List&lt;string&gt;** | A list of commission program ids that will use this resource. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

