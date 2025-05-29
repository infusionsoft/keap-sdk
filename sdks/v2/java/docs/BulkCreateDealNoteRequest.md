

# BulkCreateDealNoteRequest

Request model for creating a deal note as part of a bulk operation.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**body** | **String** | The body of the note. Must not be blank and must be between 1 and 5000 characters. |  |
|**createdBy** | **String** | The creator of the note. Must not be blank and must be between 1 and 255 characters. |  |
|**dealId** | **String** | The ID of the deal to which the note is associated. Must not be blank. |  |


## Implemented Interfaces

* Serializable

