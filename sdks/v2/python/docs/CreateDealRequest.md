# CreateDealRequest

Request model for creating a deal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the deal. This field is required and must have at least one character. | 
**value** | [**Money**](Money.md) | The monetary value of the deal. This field is required and must be valid. | 
**contacts** | [**List[DealContact]**](DealContact.md) | The list of contacts associated with the deal. This field is required. | 
**stage** | [**Stage**](Stage.md) | The stage of the deal. This field is required and must be valid. | 
**owners** | [**List[Owner]**](Owner.md) | The list of owners of the deal. This field is required. | 
**owner_id** | **str** | The ID of the owner of the deal. This field is optional. | [optional] 
**task_ids** | **List[str]** | The list of task IDs associated with the deal. This field is required. | 
**status** | **str** | The status of the deal. This field is required. | 
**estimated_close_time** | **datetime** | The estimated close time of the deal. This field is optional. | [optional] 
**custom_fields** | **Dict[str, object]** | The custom fields associated with the deal. This field is optional. | [optional] 

## Example

```python
from keap_core_v2_client.models.create_deal_request import CreateDealRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDealRequest from a JSON string
create_deal_request_instance = CreateDealRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDealRequest.to_json())

# convert the object into a dict
create_deal_request_dict = create_deal_request_instance.to_dict()
# create an instance of CreateDealRequest from a dict
create_deal_request_from_dict = CreateDealRequest.from_dict(create_deal_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


