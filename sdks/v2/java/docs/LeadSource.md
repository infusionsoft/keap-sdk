

# LeadSource


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | The unique identifier for this lead source |  [optional] |
|**name** | **String** | The name of the lead source |  [optional] |
|**description** | **String** | The description of the lead source |  [optional] |
|**vendor** | **String** | The vendor of the lead source |  [optional] |
|**medium** | **String** | The medium of the lead source |  [optional] |
|**message** | **String** | The message/content of the lead source |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | The status of the lead source |  [optional] |
|**leadSourceCategoryId** | **String** | The ID of the category that the lead source belongs to |  [optional] |
|**startTime** | **ZonedDateTime** | The time that this lead source started |  [optional] |
|**endTime** | **ZonedDateTime** | The time that this lead source will end |  [optional] |
|**createTime** | **ZonedDateTime** | The time that this lead source was created |  [optional] |
|**updateTime** | **ZonedDateTime** | The time that this lead source was last updated |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

