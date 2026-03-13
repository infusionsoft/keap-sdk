# Item


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique identifier of the item | [optional] 
**name** | **str** | The name of the item | [optional] 
**type** | **str** | The type of flow item | [optional] 
**next_item_id** | **str** | The ID of the next item in the sequence | [optional] 
**previous_item_id** | **str** | The ID of the previous item in the sequence | [optional] 

## Example

```python
from keap_core_v2_client.models.item import Item

# TODO update the JSON string below
json = "{}"
# create an instance of Item from a JSON string
item_instance = Item.from_json(json)
# print the JSON string representation of the object
print(Item.to_json())

# convert the object into a dict
item_dict = item_instance.to_dict()
# create an instance of Item from a dict
item_from_dict = Item.from_dict(item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


