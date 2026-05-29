# Keap.Core.V2.Model.UpdateProgramResourceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** | The program resource title | [optional] 
**Notes** | **string** | The resource notes. | [optional] 
**Url** | **string** | The URL to the resource. | [optional] 
**Order** | **int** | The order in which the resource is displayed. Minimum value is 0. Lower values indicate higher priority. | [optional] 
**ContentHtml** | **string** | The contents of the PAGE or EMAIL. In HTML format. | [optional] 
**PageWidth** | **int** | The width of the page for PAGE types, in pixels. Minimum value is 0. | [optional] 
**PageHeight** | **int** | The height of the page for PAGE types, in pixels. Minimum value is 0. | [optional] 
**CommissionProgramIds** | **List&lt;string&gt;** | A list of commission program ids to use this resource. The values in this list will replace the existing list of commission program ids. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

