# ProductVariableSetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contain_spaces** | **bool** | If spaces are allowed for the option | [optional] 
**contains** | **str** | Requires the value (excluding start and end) to contain given type. Can be LETTER, NUMBER, or BOTH. | [optional] 
**end_with** | **str** | Requires the value to end with the given type. Can be LETTER, NUMBER, or BOTH. | [optional] 
**max_chars** | **int** | Max allowable chars. Its value must be greater than min_chars | [optional] 
**min_chars** | **int** | Minimum allowable characters | [optional] 
**start_with** | **str** | Requires the value to start with the given type. Can be LETTER, NUMBER, or BOTH. | [optional] 
**validation_msg** | **str** | Customized validation message to display when option criteria aren’t met | [optional] 

## Example

```python
from keap_core_v2_client.models.product_variable_setting import ProductVariableSetting

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariableSetting from a JSON string
product_variable_setting_instance = ProductVariableSetting.from_json(json)
# print the JSON string representation of the object
print(ProductVariableSetting.to_json())

# convert the object into a dict
product_variable_setting_dict = product_variable_setting_instance.to_dict()
# create an instance of ProductVariableSetting from a dict
product_variable_setting_from_dict = ProductVariableSetting.from_dict(product_variable_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


