# DealStage

The stage of the deal. This field is required and must be valid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the model. | [optional] 
**name** | **str** | The name of the stage. | [optional] 
**pipeline_id** | **str** | The ID of the pipeline. | [optional] 

## Example

```python
from keap_core_v2_client.models.deal_stage import DealStage

# TODO update the JSON string below
json = "{}"
# create an instance of DealStage from a JSON string
deal_stage_instance = DealStage.from_json(json)
# print the JSON string representation of the object
print(DealStage.to_json())

# convert the object into a dict
deal_stage_dict = deal_stage_instance.to_dict()
# create an instance of DealStage from a dict
deal_stage_from_dict = DealStage.from_dict(deal_stage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


