

# CreateLeadSourceRequest


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**description** | **String** | A description of the lead source |  [optional] |
|**endTime** | **String** | When the lead source ends |  [optional] |
|**leadSourceCategoryId** | **String** | The lead source category that the lead source belongs to |  [optional] |
|**medium** | **String** | The medium of the lead source |  [optional] |
|**message** | **String** | A message on the lead source |  [optional] |
|**name** | **String** | The name of the lead source |  [optional] |
|**startTime** | **String** | When the lead source starts |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) | The status of the lead source |  [optional] |
|**vendor** | **String** | The vendor of the lead source |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| ACTIVE | &quot;ACTIVE&quot; |
| INACTIVE | &quot;INACTIVE&quot; |
| UNKNOWN_COULD_NOT_DESERIALIZE | &quot;unknown_default_open_api&quot; |


## Implemented Interfaces

* Serializable

