# KeapCoreServiceV2Sdk.CreateProgramResourceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The program resource title | 
**type** | **String** | The type of resource | 
**notes** | **String** | The resource notes. | [optional] 
**url** | **String** | The URL to the resource. | [optional] 
**order** | **Number** | The order in which the resource is displayed. Minimum value is 0. Defaults to 0. Lower values indicate higher priority. | [optional] 
**contentHtml** | **String** | The contents of the PAGE or EMAIL. In HTML format. | [optional] 
**pageWidth** | **Number** | The width of the page for PAGE types, in pixels. Minimum value is 0. Defaults to 0 | [optional] 
**pageHeight** | **Number** | The height of the page for PAGE types, in pixels. Minimum value is 0. Defaults to 0 | [optional] 
**commissionProgramIds** | **[String]** | A list of commission program ids that will use this resource. | 



## Enum: TypeEnum


* `EMAIL` (value: `"EMAIL"`)

* `BANNER` (value: `"BANNER"`)

* `PAGE` (value: `"PAGE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




