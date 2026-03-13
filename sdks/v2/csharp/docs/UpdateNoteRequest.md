# Keap.Core.V2.Model.UpdateNoteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** | A value for either &#x60;title&#x60; or &#x60;type&#x60; is required. | [optional] 
**Text** | **string** | Note content | [optional] 
**Type** | **string** | A value for either &#x60;title&#x60; or &#x60;type&#x60; is required. The value may be one of &#x60;Appointment&#x60;, &#x60;Call&#x60;, &#x60;Email&#x60;, &#x60;Fax&#x60;, &#x60;Letter&#x60; or &#x60;Other&#x60; in Keap Max/Pro, or an admin-configured value in Classic. | [optional] 
**UserId** | **string** | ID of user creating the note | 
**IsPinned** | **bool** | Whether to pin this note | [optional] 
**ContactId** | **string** | Associated contact ID | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

