

# Deal

Represents a deal.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier for the model. |  [optional] |
|**name** | **String** | The name of the deal. This field is required and must have at least one character. |  |
|**value** | [**Money**](Money.md) | The monetary value of the deal. This field is required and must be valid. |  |
|**contactIds** | **List&lt;String&gt;** | The list of IDs of contacts associated with the deal. This field is required. |  |
|**stageId** | **String** | The stage of the deal. This field is required and must be valid. |  |
|**stageAssignmentTime** | **ZonedDateTime** | The time when the deal was assigned to the current stage. This field is required. |  |
|**ownerIds** | **List&lt;String&gt;** | The list of IDs of owners of the deal. This field is required. |  [optional] |
|**taskIds** | **List&lt;String&gt;** | The list of task IDs associated with the deal. This field is required. |  |
|**orderId** | **String** | The order of the deal. This field is optional. |  [optional] |
|**status** | **String** | The status of the deal. This field is required. |  |
|**estimatedCloseTime** | **ZonedDateTime** | The estimated close time of the deal. This field is optional. |  [optional] |
|**closedTime** | **ZonedDateTime** | The actual close time of the deal. This field is optional. |  [optional] |
|**customFields** | **Map&lt;String, Object&gt;** | The custom fields associated with the deal. This field is optional. |  [optional] |


## Implemented Interfaces

* Serializable

