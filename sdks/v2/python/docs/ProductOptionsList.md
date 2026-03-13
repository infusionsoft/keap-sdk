# ProductOptionsList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The option name | [optional] 
**type** | **str** | The option type. If FIXED, then fixed_options will be returned. If VARIABLE, then variable_setting will be returned. | [optional] 
**required** | **bool** | If the user is required to select/fill in an option for the product | [optional] 
**fixed_options** | [**List[ProductFixedOptionList]**](ProductFixedOptionList.md) | List of option values for the fixed option | [optional] 
**variable_setting** | [**ProductVariableSettingList**](ProductVariableSettingList.md) | The option is a user-defined free-form field. The settings define the restrictions on what can be entered. | [optional] 

## Example

```python
from keap_core_v2_client.models.product_options_list import ProductOptionsList

# TODO update the JSON string below
json = "{}"
# create an instance of ProductOptionsList from a JSON string
product_options_list_instance = ProductOptionsList.from_json(json)
# print the JSON string representation of the object
print(ProductOptionsList.to_json())

# convert the object into a dict
product_options_list_dict = product_options_list_instance.to_dict()
# create an instance of ProductOptionsList from a dict
product_options_list_from_dict = ProductOptionsList.from_dict(product_options_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


