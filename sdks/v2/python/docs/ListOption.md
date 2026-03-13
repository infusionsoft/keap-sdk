# ListOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item_id** | **str** | The unique id of this option’s item value. | [optional] 
**item_label** | **str** | The displayable name of the option item. | [optional] 
**item_code** | **str** | An internal code (e.g. sku) to associate the item option. | [optional] 
**item_display_order** | **int** | The order in which this item will be displayed among other items. Minimum is 0. Lower values indicate higher priority in order. | [optional] 
**price_adjustment** | **float** | An amount to adjust to the product price is selected. Negative value indicates subtraction from price. | [optional] 

## Example

```python
from keap_core_v2_client.models.list_option import ListOption

# TODO update the JSON string below
json = "{}"
# create an instance of ListOption from a JSON string
list_option_instance = ListOption.from_json(json)
# print the JSON string representation of the object
print(ListOption.to_json())

# convert the object into a dict
list_option_dict = list_option_instance.to_dict()
# create an instance of ListOption from a dict
list_option_from_dict = ListOption.from_dict(list_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


