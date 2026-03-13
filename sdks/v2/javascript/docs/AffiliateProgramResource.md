# KeapCoreServiceV2Sdk.AffiliateProgramResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The program resource identifier | [optional] 
**title** | **String** | The program resource title | [optional] 
**type** | **String** | The type of resource | [optional] 
**notes** | **String** | The resource notes. | [optional] 
**url** | **String** | The URL to the resource. | [optional] 
**order** | **Number** | The order which the resource to be displayed. Minimum value is 0. Lower values indicate higher priority. | [optional] 
**contentHtml** | **String** | The contents of the PAGE or EMAIL. In HTML format. | [optional] 
**pageWidth** | **Number** | The width of the page for PAGE types, in pixels. | [optional] 
**pageHeight** | **Number** | The height of the page for PAGE types, in pixels. | [optional] 
**commissionPrograms** | [**[ResourceCommissionProgram]**](ResourceCommissionProgram.md) | A list of commission programs using this resource. | [optional] 



## Enum: TypeEnum


* `EMAIL` (value: `"EMAIL"`)

* `BANNER` (value: `"BANNER"`)

* `PAGE` (value: `"PAGE"`)

* `unknown_default_open_api` (value: `"unknown_default_open_api"`)




