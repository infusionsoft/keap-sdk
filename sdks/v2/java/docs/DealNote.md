

# DealNote

A model representing a note associated with a deal.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier for the model. |  [optional] |
|**dealId** | **String** | The ID of the deal associated with the note. |  [optional] |
|**body** | **String** | The body content of the note. |  [optional] |
|**createdBy** | **String** | The ID of the user who created the note. |  [optional] |
|**createdTime** | **ZonedDateTime** | The timestamp when the note was created. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. |  [optional] |
|**modifiedTime** | **ZonedDateTime** | The timestamp when the note was last modified. Formatted as a string according to the pattern \&quot;yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX\&quot;. |  [optional] |


## Implemented Interfaces

* Serializable

