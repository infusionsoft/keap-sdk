

# OpportunityStageMove

Historical record of an opportunity moving from one pipeline stage to another

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique ID of this stage-move record |  [optional] |
|**opportunityId** | **String** | ID of the opportunity that was moved |  [optional] |
|**moveTime** | **String** | Date-time when the move occurred (ISO-8601 UTC) |  [optional] |
|**moveFromStageId** | **String** | ID of the stage moved FROM. 0 &#x3D; no previous stage (first move) |  [optional] |
|**moveToStageId** | **String** | ID of the stage moved TO |  [optional] |
|**prevStageMoveTime** | **String** | Date-time of the previous stage-move (ISO-8601 UTC). Null if first move. |  [optional] |
|**userId** | **String** | ID of the user associated with this move |  [optional] |
|**createdBy** | **String** | ID of the user who created this record |  [optional] |
|**createTime** | **String** | Date-time this record was created (ISO-8601 UTC) |  [optional] |


## Implemented Interfaces

* Serializable

