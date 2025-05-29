

# BulkCreateDealNoteResponse

Response model for creating a deal note as part of a bulk operation.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier for the note. |  [optional] |
|**body** | **String** | The body content of the note. |  [optional] |
|**dealId** | **String** | The ID of the deal associated with the note. |  [optional] |
|**createdBy** | **String** | The ID of the user who created the note. |  [optional] |
|**createdTime** | **ZonedDateTime** | The timestamp when the note was created. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. |  [optional] |
|**modifiedTime** | **ZonedDateTime** | The timestamp when the note was last modified. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. |  [optional] |
|**createSuccess** | **Boolean** | Indicates whether the note was created successfully. |  [optional] |
|**errorMessage** | **String** | If the note creation was not successful, this field contains the error message. |  [optional] |


## Implemented Interfaces

* Serializable

