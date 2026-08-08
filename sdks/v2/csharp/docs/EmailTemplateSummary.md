# Keap.Core.V2.Model.EmailTemplateSummary
Email template metadata returned by the list endpoint. Does not include body content; use GET /v2/emails/templates/{id} for full detail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **long** | The id of the template | [optional] 
**PieceTitle** | **string** | The title of the template | [optional] 
**Categories** | **List&lt;string&gt;** | The categories associated with the email | [optional] 
**FromAddress** | **string** | The from address of the email | [optional] 
**ToAddress** | **string** | The to address of the email | [optional] 
**CcAddress** | **string** | The cc address of the email | [optional] 
**BccAddress** | **string** | The bcc address of the email | [optional] 
**Subject** | **string** | The subject of the email | [optional] 
**ContentType** | **string** | The content type of the email | [optional] 
**MergeContext** | **string** | The merge context of the email | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

