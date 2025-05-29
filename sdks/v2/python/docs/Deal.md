# Deal

Represents a deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the model. | [optional] 
**name** | **str** | The name of the deal. This field is required and must have at least one character. | 
**value** | [**Money**](Money.md) | The monetary value of the deal. This field is required and must be valid. | 
**contact_ids** | **List[str]** | The list of IDs of contacts associated with the deal. This field is required. | 
**stage_id** | **str** | The stage of the deal. This field is required and must be valid. | 
**stage_assignment_time** | **datetime** | The time when the deal was assigned to the current stage. This field is required. | 
**owner_ids** | **List[str]** | The list of IDs of owners of the deal. This field is required. | [optional] 
**task_ids** | **List[str]** | The list of task IDs associated with the deal. This field is required. | 
**order_id** | **str** | The order of the deal. This field is optional. | [optional] 
**status** | **str** | The status of the deal. This field is required. | 
**estimated_close_time** | **datetime** | The estimated close time of the deal. This field is optional. | [optional] 
**closed_time** | **datetime** | The actual close time of the deal. This field is optional. | [optional] 
**custom_fields** | **Dict[str, object]** | The custom fields associated with the deal. This field is optional. | [optional] 

## Example

```python
from keap_core_v2_client.models.deal import Deal

# TODO update the JSON string below
json = "{}"
# create an instance of Deal from a JSON string
deal_instance = Deal.from_json(json)
# print the JSON string representation of the object
print(Deal.to_json())

# convert the object into a dict
deal_dict = deal_instance.to_dict()
# create an instance of Deal from a dict
deal_from_dict = Deal.from_dict(deal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


