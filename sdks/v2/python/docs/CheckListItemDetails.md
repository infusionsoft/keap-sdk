# CheckListItemDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**done_date** | **datetime** |  | [optional] 
**id** | **int** |  | [optional] 
**instance_id** | **int** |  | [optional] 
**item_order** | **int** |  | [optional] 
**required** | **bool** |  | [optional] 

## Example

```python
from keap_core_v2_client.models.check_list_item_details import CheckListItemDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CheckListItemDetails from a JSON string
check_list_item_details_instance = CheckListItemDetails.from_json(json)
# print the JSON string representation of the object
print(CheckListItemDetails.to_json())

# convert the object into a dict
check_list_item_details_dict = check_list_item_details_instance.to_dict()
# create an instance of CheckListItemDetails from a dict
check_list_item_details_from_dict = CheckListItemDetails.from_dict(check_list_item_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


