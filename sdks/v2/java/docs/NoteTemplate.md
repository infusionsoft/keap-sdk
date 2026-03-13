

# NoteTemplate


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Template ID |  [optional] |
|**title** | **String** | Template title |  [optional] |
|**description** | **String** | Template description |  [optional] |
|**actionType** | [**ActionTypeEnum**](#ActionTypeEnum) | Note action type |  [optional] |
|**assignmentUserId** | **Long** | Default assigned user ID |  [optional] |
|**notifyUsers** | **List&lt;String&gt;** | List of user IDs to notify |  [optional] |



## Enum: ActionTypeEnum

| Name | Value |
|---- | -----|
| APPOINTMENT | &quot;APPOINTMENT&quot; |
| CALL | &quot;CALL&quot; |
| EMAIL | &quot;EMAIL&quot; |
| FAX | &quot;FAX&quot; |
| LETTER | &quot;LETTER&quot; |
| OTHER | &quot;OTHER&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

