# StageDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checklist_items** | [**List[CheckListItemDetails]**](CheckListItemDetails.md) |  | [optional] 
**probability** | **int** |  | [optional] 
**stage_order** | **int** |  | [optional] 
**target_num_days** | **int** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.stage_details import StageDetails

# TODO update the JSON string below
json = "{}"
# create an instance of StageDetails from a JSON string
stage_details_instance = StageDetails.from_json(json)
# print the JSON string representation of the object
print(StageDetails.to_json())

# convert the object into a dict
stage_details_dict = stage_details_instance.to_dict()
# create an instance of StageDetails from a dict
stage_details_from_dict = StageDetails.from_dict(stage_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


