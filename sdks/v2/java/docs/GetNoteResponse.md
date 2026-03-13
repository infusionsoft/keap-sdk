

# GetNoteResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Note ID |  [optional] |
|**text** | **String** | Note content |  [optional] |
|**title** | **String** | Note title |  [optional] |
|**type** | **String** | Note type |  [optional] |
|**contactId** | **String** | Associated contact ID |  [optional] |
|**assignedToUser** | [**BasicUser**](BasicUser.md) | User assigned to this note |  [optional] |
|**createTime** | **String** | Creation timestamp (ISO-8601) |  [optional] |
|**updateTime** | **String** | Last update timestamp (ISO-8601) |  [optional] |
|**lastUpdatedByUserId** | **String** | ID of user who last updated |  [optional] |
|**pinnedAt** | **String** | Pin timestamp (ISO-8601), null if not pinned |  [optional] |
|**createdByUserId** | **String** | ID of user who created |  [optional] |


## Implemented Interfaces

* Serializable

