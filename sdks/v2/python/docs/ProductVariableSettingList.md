# ProductVariableSettingList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contains** | **str** | Requires the value (excluding start and end) to contain given type. | [optional] 
**min_chars** | **int** | Minimum allowable characters | [optional] 
**max_chars** | **int** | Max allowable chars. Its value must be greater than min_chars | [optional] 
**contain_spaces** | **bool** | If spaces are allowed for the option | [optional] 
**start_with** | **str** | Requires the value to start with the given type. | [optional] 
**end_with** | **str** | Requires the value to end with the given type. | [optional] 
**validation_msg** | **str** | Customized validation message to display when option criteria aren&#39;t met | [optional] 

## Example

```python
from keap_core_v2_client.models.product_variable_setting_list import ProductVariableSettingList

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariableSettingList from a JSON string
product_variable_setting_list_instance = ProductVariableSettingList.from_json(json)
# print the JSON string representation of the object
print(ProductVariableSettingList.to_json())

# convert the object into a dict
product_variable_setting_list_dict = product_variable_setting_list_instance.to_dict()
# create an instance of ProductVariableSettingList from a dict
product_variable_setting_list_from_dict = ProductVariableSettingList.from_dict(product_variable_setting_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


