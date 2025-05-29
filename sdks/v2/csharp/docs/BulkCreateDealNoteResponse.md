# Keap.Core.V2.Model.BulkCreateDealNoteResponse
Response model for creating a deal note as part of a bulk operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the note. | [optional] 
**Body** | **string** | The body content of the note. | [optional] 
**DealId** | **string** | The ID of the deal associated with the note. | [optional] 
**CreatedBy** | **string** | The ID of the user who created the note. | [optional] 
**CreatedTime** | **DateTime** | The timestamp when the note was created. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. | [optional] 
**ModifiedTime** | **DateTime** | The timestamp when the note was last modified. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. | [optional] 
**CreateSuccess** | **bool** | Indicates whether the note was created successfully. | [optional] 
**ErrorMessage** | **string** | If the note creation was not successful, this field contains the error message. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

