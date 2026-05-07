# Keap.Core.V2.Model.GetNoteResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Note ID | [optional] 
**Text** | **string** | Note content | [optional] 
**Title** | **string** | Note title | [optional] 
**Type** | **string** | Note type | [optional] 
**ContactId** | **string** | Associated contact ID | [optional] 
**AssignedToUser** | [**BasicUser**](BasicUser.md) | User assigned to this note | [optional] 
**CreateTime** | **string** | Creation timestamp (ISO-8601) | [optional] 
**UpdateTime** | **string** | Last update timestamp (ISO-8601) | [optional] 
**LastUpdatedByUserId** | **string** | ID of user who last updated | [optional] 
**PinnedAt** | **string** | Pin timestamp (ISO-8601), null if not pinned | [optional] 
**CreatedByUserId** | **string** | ID of user who created | [optional] 
**CustomFields** | [**List&lt;CustomFieldValueObject&gt;**](CustomFieldValueObject.md) | Custom field values for the note | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

