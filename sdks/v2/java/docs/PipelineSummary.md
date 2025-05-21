

# PipelineSummary

Represents a summary of a pipeline.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** | Unique identifier for the model. |  [optional] |
|**pipelineId** | **String** | The ID of the pipeline. Can be null and must be a string of digits if present. |  [optional] |
|**pipelineName** | **String** | The name of the pipeline. Must be a non-null string with a length between 1 and 255 characters. |  |
|**statTotalDealCount** | **Integer** | The total count of deals in the pipeline. Can be null. |  [optional] |
|**statNewDealCount** | **Integer** | The count of new deals in the pipeline. Can be null. |  [optional] |


## Implemented Interfaces

* Serializable

